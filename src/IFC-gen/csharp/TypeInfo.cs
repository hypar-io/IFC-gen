using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Express
{
	/// <summary>
	/// Base class which gathers type information has set out in 
	/// EXPRESS' TYPE or ENTITY attributes.
	/// </summary>
	public abstract class TypeInfo
	{
		public string Name{get;set;}

		/// <summary>
		/// A string representing the key to be used for an attribute during serialization.
		/// </summary>
		/// <returns></returns>
		public string JsonPropertyName
		{
			get
			{
				return Char.ToLowerInvariant(Name[0]) + Name.Substring(1);
			}
		}
		public EntityDeclarationInfo Entity{get;set;}

		/// <summary>
		/// A string representing the parameter corresponding to an attribute's info.
		/// </summary>
		/// <returns></returns>
		public string ParameterName
		{
			get
			{
				var name = Name;
				if(Name == "Operator")
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
		
		public string ValueType{get;set;}

		public TypeInfo(string name)
		{
			Name = name;
		}

		public static string ToSystemType(string type)
		{
			var retType = type;

			if(type.Contains("BINARY"))
			{
				return "System.Byte[]";
			}

			if(type.Contains("STRING("))
			{
				return "System.String";
			}

			switch(type)
			{
				case "BOOLEAN":
					retType = "System.Boolean";
					break;
				case "LOGICAL":
					retType = "System.Boolean";
					//retType = "System.Boolean?";
					break;
				case "REAL":
					retType = "System.Double";
					break;
				case "STRING":
					retType = "System.String";
					break;
				case "INTEGER":
					retType = "System.Int32";
					break;
				case "NUMBER":
					retType = "System.Double";
					break;
				default:
					retType = type;
					break;
			}
			return retType;
		}

		public bool IsDerivedFromRelationship()
		{
			if(Entity == null)
			{
				return false;
			}
			return Entity.IsEntityOrSubtypeOfEntity("IfcRelationship");
		}

		/// <summary>
		/// A string representing the initialization and allocation of a property of this type.
		/// </summary>
		/// <returns></returns>
		public virtual string ToInitializationString()
		{
			return string.Empty;
		}
	}

	/// <summary>
	/// Base class for type information which represents an enumerated list,
	/// such as EXPRESS ENUM and SELECT.
	/// </summary>
	public abstract class EnumeratedTypeInfo : TypeInfo
	{
		public string[] Values{get;set;}

		public EnumeratedTypeInfo(string name) : base(name){}
	}

	/// <summary>
	/// Type info representing an EXPRESS ENUM.
	/// </summary>
	public class EnumInfo : EnumeratedTypeInfo
	{
		public EnumInfo(string name) : base(name){}

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

	/// <summary>
	/// Type info representing an EXPRESS SELECT.
	/// </summary>
	public class SelectInfo : EnumeratedTypeInfo
	{
		public SelectInfo(string name) : base(name){}

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
	/// Type information for a wrapper around a system type.
	/// </summary>
	public class DefinedTypeInfo : TypeInfo
	{
		public DefinedTypeInfo(string name) : base(name){}

		public override string ToString()
		{	
			return $"{TypeInfo.ToSystemType(ValueType)}";
		}
	}
}