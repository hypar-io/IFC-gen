using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Antlr4.Runtime.Misc;

namespace Express
{
	/// <summary>
	/// AttributeData store information about an attribute.
	/// </summary>
	internal class AttributeData
	{
		public string Name{get;set;}

		public string Type{get;set;}

		public bool IsRelationshipReference{get;set;}

		public bool IsInverse{get;set;}

		public bool IsDerived{get;set;}

		public bool IsOptional{get;set;}

		public bool IsCollection{get;set;}

		public int Rank{get;set;}

		public AttributeData ()
		{
		}

		/// <summary>
		/// A string representing the parameter corresponding to an attribute's info.
		/// </summary>
		/// <returns></returns>
		public string ParameterName
		{
			get
			{
				var name = Name;
				if(name == "Operator")
				{
					name = "op";
				}

				// Sometimes the name will be of the format SELF\IfcGeometricRepresentationContext.TrueNorth
				// This won't work as a parameter name. Split it and takes the last part.
				var split = name.Split('.');
				if(split.Count() > 1)
				{
					name = split.Last();
				}
				return Char.ToLowerInvariant(name[0]) + name.Substring(1);
			}
		}

		public override string ToString()
		{
			var opt = IsOptional? "// optional":string.Empty;
			var type = IsCollection? 
						$"{string.Join("",Enumerable.Repeat("List<",Rank))}{Type}{string.Join("",Enumerable.Repeat(">",Rank))}":Type;
			var prop = $"\t\tpublic {type} {Name}{{get;set;}} {opt}";
			return prop;
		}

		public string Assignment()
		{
			return $"\t\t\t{Name} = {ParameterName};";
		}

		public string Allocation()
		{
			if(IsCollection)
			{
				return $"\t\t\t{Name} = new {string.Join("",Enumerable.Repeat("List<",Rank))}{Type}{string.Join("",Enumerable.Repeat(">",Rank))}();";
			}
			return null;
		}
	}

	internal abstract class TypeData
	{
		public string Name {get;set;}

		public TypeData(string name)
		{
			Name = name;
		}
	}

	internal abstract class CollectionTypeData : TypeData
	{
		/// <summary>
		/// For a TypeData which wraps a Select or an Enum, the Values
		/// collection will contain the items that are enumerated or selected.
		/// </summary>
		/// <returns></returns>
		public IEnumerable<string> Values{get;set;}

		public CollectionTypeData(string name) : base(name)
		{
			Values = new List<string>();
		}
	}

	internal class SimpleType : TypeData
	{
		public bool IsCollectionType{get;set;}

		/// <summary>
		/// For a TypeData which wraps a collection, the rank is the depth of
		/// the collection. Ex: A collection with Rank=1 will be a List<List<object>>.
		/// </summary>
		/// <returns></returns>
		public int Rank{get;set;}
		
		private string wrappedType;
		/// <summary>
		/// In the case of a simple type, the WrappedType
		/// will be the name of type which is wrapped in an IfcType.
		/// </summary>
		/// <returns></returns>
		public string WrappedType
		{
			get
			{
				if(IsCollectionType)
				{
					return $"{string.Join("",Enumerable.Repeat("List<",Rank))}{wrappedType}{string.Join("",Enumerable.Repeat(">",Rank))}";
				}
				return wrappedType;
			}
			set
			{
				wrappedType = value;
			}
		}

		public SimpleType(string name) : base(name){}

		private string AsCollection()
		{
			return $"{string.Join("",Enumerable.Repeat("List<",Rank))}{WrappedType}{string.Join("",Enumerable.Repeat(">",Rank))}";
		}

		/// <summary>
		/// Return a string representing the TypeData as an IfcType.
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{	
			var result = 
	$@"	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{Name.ToLower()}.htm
	/// </summary>
	public class {Name} : IfcType<{WrappedType}>
	{{
		public {Name}({WrappedType} value):base(value){{}}	

		public static implicit operator {WrappedType}({Name} v)
		{{
			return v.Value;
		}}

		public static implicit operator {Name}({WrappedType} v)
		{{
			return new {Name}(v);
		}}	

		public static {Name} FromJSON(string json)
		{{
			return JsonConvert.DeserializeObject<{Name}>(json);
		}}

		public static {Name} FromSTEP(string step)
		{{
			throw new NotImplementedException();
		}}
	}}
";
			return result;
		}
	}

	internal class EnumType : CollectionTypeData
	{
		public EnumType(string name) : base(name){}

		/// <summary>
		/// Returns a string representing the TypeData as an Enum.
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			var result = 
	$@"	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{Name.ToLower()}.htm
	/// </summary>
	public enum {Name} {{{string.Join(",",Values)}}}
";
			return result;
		}
	}

	internal class SelectType : CollectionTypeData
	{
		public SelectType(string name) : base(name){}

		/// <summary>
		/// Return a string representing the TypeData as a Select.
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			var constructors = new StringBuilder();
			foreach(var value in Values)
			{
				constructors.AppendLine($"\t\tpublic {Name}({value} value):base(value){{}}");
			}
			var result = 
	$@"	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{Name.ToLower()}.htm
	/// </summary>
	public class {Name} : IfcSelect<{string.Join(",",Values)}>
	{{
{constructors}
		public static {Name} FromJSON(string json)
		{{
			return JsonConvert.DeserializeObject<{Name}>(json);
		}}

		public static {Name} FromSTEP(string step)
		{{
			throw new NotImplementedException();
		}}
	}}
";
			return result;
		}
	}

	/// <summary>
	/// TypeData stores information about a type.
	/// </summary>
	internal class Entity : TypeData
	{
		public List<Entity> Supers{get;set;}
		public List<Entity> Subs{get;set;}

		public List<AttributeData> Attributes{get;set;}

		public bool IsAbstract{get;set;}

		public Entity(string name) : base(name)
		{
			Name = name;
			Supers = new List<Entity>();
			Subs = new List<Entity>();
			Attributes = new List<AttributeData>();
		}

		/// <summary>
		/// Return all parents to this type all the way to the root.
		/// </summary>
		/// <returns></returns>
		private IEnumerable<Entity> Parents()
		{
			var parents = new List<Entity>();
			parents.AddRange(Subs);

			foreach(var s in Subs)
			{
				parents.AddRange(s.Parents());
			}
			return parents;
		}

		/// <summary>
		/// Return a set of constructor parameters in the form 'Type name1, Type name2'
		/// </summary>
		/// <returns></returns>
		private string ConstructorParams()
		{
			// Constructor parameters include the union of this type's attributes and all super type attributes.
			// A constructor parameter is created for every attribute which does not derive
			// from IFCRelationship.
			var attrs = Attributes.Concat(Parents().SelectMany(p=>p.Attributes));

			if(!attrs.Any())
			{
				return string.Empty;
			}

			var validAttrs = attrs
								.Where(a=>!a.IsRelationshipReference)
								.Where(a=>!a.IsOptional)
								.Where(a=>!a.IsInverse);

			return string.Join(",", validAttrs.Select(a=>$"{a.Type} {a.ParameterName}"));
		}
		
		/// <summary>
		/// Return a set of constructor params in the form `name1, name2`.
		/// </summary>
		/// <returns></returns>
		private string BaseConstructorParams()
		{
			// Base constructor parameters include the union of all super type attributes.
			var attrs = Parents()
						.SelectMany(p=>p.Attributes);
						
			if(!attrs.Any())
			{
				return string.Empty;
			}
			var validAttrs = attrs
								.Where(a=>!a.IsRelationshipReference)
								.Where(a=>!a.IsOptional)
								.Where(a=>!a.IsInverse);

			return string.Join(",", validAttrs.Select(a=>$"{a.ParameterName}"));
		}

		/// <summary>
		/// Determine whether this is the provided type or a sub-type of the provided type.
		/// </summary>
		/// <param name="typeName"></param>
		/// <returns></returns>
		public bool IsTypeOrSubtypeOfEntity(string typeName)
		{
			if(this.Name == typeName)
			{
				return true;
			}

			foreach(var s in Subs)
			{
				var found = s.IsTypeOrSubtypeOfEntity(typeName);
				if(found)
				{
					return true;
				}
			}

			return false;
		}

		public string Properties()
		{
			var attrs = Attributes.Where(a=>!a.IsDerived && !a.IsInverse);
			var propBuilder = new StringBuilder();
			foreach(var a in attrs)
			{
				propBuilder.AppendLine(a.ToString());
			}
			return propBuilder.ToString();
		}

		public string Assignments()
		{
			var attrs = Attributes.Where(a=>!a.IsDerived && !a.IsInverse && !a.IsOptional);
			var assignBuilder = new StringBuilder();
			foreach(var a in attrs)
			{
				assignBuilder.AppendLine(a.Assignment());
			}
			return assignBuilder.ToString();
		}

		public string Allocations()
		{
			var attrs = Attributes.Where(a=>!a.IsDerived && !a.IsInverse && a.IsCollection && a.IsOptional);
			var allocBuilder = new StringBuilder();
			foreach(var a in attrs)
			{
				allocBuilder.AppendLine(a.Allocation());
			}
			return allocBuilder.ToString();
		}

		/// <summary>
		/// Return a string representing the TypeData as a Class.
		/// </summary>
		/// <returns></returns>
		public override string ToString()
		{
			var super =  "IfcBase";
			var newMod = string.Empty;
			if(Subs.Any())
			{
				super = Subs[0].Name;;
				newMod = "new";
			}

			var modifier = IsAbstract? "abstract":string.Empty;

			var classStr =
$@"
	/// <summary>
	/// <see href=""http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{Name.ToLower()}.htm""/>
	/// </summary>
	public {modifier} partial class {Name} : {super}
	{{
{Properties()}
		public {Name}({ConstructorParams()}):base({BaseConstructorParams()})
		{{
{Assignments()}
{Allocations()}
		}}

		public static {newMod} {Name} FromJSON(string json)
		{{
			return JsonConvert.DeserializeObject<{Name}>(json);
		}}

		public static {newMod} {Name} FromSTEP(string step)
		{{
			throw new NotImplementedException();
		}}
	}}";
			return classStr;
		}
	}
}