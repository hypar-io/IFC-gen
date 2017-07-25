using System;
using System.Linq;
using System.Text;
using System.Collections.Generic;

namespace Express
{
	public class EntityDeclarationInfo
	{

		/// <summary>
		/// The name of the entity.
		/// </summary>
		/// <returns></returns>
		public string Name {get;set;}
		
		/// <summary>
		/// A list of entities which derive from this.
		/// </summary>
		/// <returns></returns>
		public List<string> SupertypeOf {get;set;}

		/// <summary>
		/// A list of entities from which this derives.
		/// </summary>
		/// <returns></returns>
		public List<string> SubtypeOf {get;set;}
		
		/// <summary>
		/// The entity from which this entity is derived.
		/// EXPRESS supports multiple inheritance. In C#, we
		/// support only one parent.
		/// </summary>
		/// <returns></returns>
		public EntityDeclarationInfo ParentEntity{get;set;}

		/// <summary>
		/// A list of entities which derive from this entity.
		/// </summary>
		/// <returns></returns>
		public List<EntityDeclarationInfo> ChildEntities{get;set;}

		/// <summary>
		/// A list of attributes which define this entity.
		/// </summary>
		/// <returns></returns>
		public List<AttributeDeclaration> Attributes{get;set;}

		/// <summary>
		/// A flag indicating whether this entity can be constructed.
		/// </summary>
		/// <returns></returns>
		public bool IsAbstract{get;set;}

		public EntityDeclarationInfo(string name)
		{
			Name = name;
			Attributes = new List<AttributeDeclaration>();
			SupertypeOf = new List<string>();
			SubtypeOf = new List<string>();
			ChildEntities = new List<EntityDeclarationInfo>();
		}

		public override string ToString()
		{
			var propStringBuilder = new StringBuilder();
			foreach(var a in AttributesForProperties())
			{
				propStringBuilder.AppendLine(a.ToString());
			}

			var supertype = string.Empty;
			var baseConstructor = string.Empty;
			if(SubtypeOf.Any())
			{
				supertype = $" : {string.Join(",",SubtypeOf)}";
				baseConstructor = $" : base({(BaseConstructorParameters())})"; 
			}

			var assignBuilder = new StringBuilder();

			if(Name == "IfcRoot")
			{
				assignBuilder.AppendLine($"\t\t\tGlobalId = new IfcGloballyUniqueId(Guid.NewGuid().ToString());");
			}
			else
			{
				foreach(var a in AttributesForUseInConstructors())
				{
					assignBuilder.AppendLine($"\t\t\t{a.TypeInfo.Name} = {a.TypeInfo.ParameterName};");
				}
				var collAttrs = Attributes.Where(a=>a.TypeInfo is CollectionInfo && a.IsOptional);
				if(collAttrs.Any())
				{
					foreach(var c in collAttrs)
					{
						assignBuilder.AppendLine($"\t\t\t{c.TypeInfo.ToInitializationString()}");
					}
				}
			}
			

			var classStr =
$@"
	/// <summary>
	/// <see href=""http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{Name.ToLower()}.htm""/>
	/// </summary>
	public {Modifier()} partial class {Name}{supertype}
	{{
{propStringBuilder.ToString()}
		public {Name}({ConstructorParameters()}){baseConstructor}
		{{
{assignBuilder.ToString()}
		}}

		public override string ToString()
		{{
			var settings = new JsonSerializationSettings()
			{{
				Formatting = Formatting.Indented,
				TypeNameHandling = TypeNameHandling.Objects
			}}
			return JsonConvert.SerializeObject(this);
		}}
	}}
";
			return classStr;
		}

		private string Modifier()
		{
			return IsAbstract? "abstract" : string.Empty;
		}

		/// <summary>
		/// The parameters to a constructor for this entity, including parameters which
		/// will be fed to the base constructor. Parameters do not include optional attributes.
		/// </summary>
		/// <returns>Returns a string formed as follows: Type1 name1, Type2 name2, ... </returns>
		private string ConstructorParameters()
		{
			if(Name == "IfcRoot")
			{
				return string.Empty;
			}

			var constructorParams = BuildConstructorParameters(AttributesForUseInConstructors());

			var parent = ParentEntity;
			while(parent != null && parent.Name != "IfcRoot")
			{
				var baseConstructorParams = parent.BuildConstructorParameters(parent.AttributesForUseInConstructors());
				if(!string.IsNullOrEmpty(baseConstructorParams))
				{
					constructorParams += string.IsNullOrEmpty(constructorParams)?baseConstructorParams:","+baseConstructorParams;
				}
				parent = parent.ParentEntity;
			}
			
			return constructorParams;
		}
		
		/// <summary>
		/// Some attributes will not have matching properties.
		/// These include attributes which are DERIVED.
		/// </summary>
		/// <returns></returns>
		private IEnumerable<AttributeDeclaration> AttributesForProperties()
		{
			return Attributes.Where(a=>!a.IsDerived);
		}

		/// /// <summary>
		/// Some attributes will not have matching constructors parameters.
		/// These include optional attributes, derived attributes, and 
		/// attributes representing a relationship.
		/// </summary>
		/// <returns></returns>
		private IEnumerable<AttributeDeclaration> AttributesForUseInConstructors()
		{
			return Attributes.Where(a=>a.ShouldAssignInConstructor());
		}

		private string BuildConstructorParameters(IEnumerable<AttributeDeclaration> attributes)
		{
			return string.Join(",",attributes.Select(a=>$"{a.TypeInfo.ToString()} {a.TypeInfo.ParameterName}\n\t\t\t\t"));
		}

		private string BaseConstructorParameters()
		{
			var baseConstructorParams = string.Empty;

			var parent = ParentEntity;
			while(parent != null && parent.Name != "IfcRoot")
			{
				var parentParams = BuildBaseConstructorParams(parent.AttributesForUseInConstructors());
				if(!string.IsNullOrEmpty(parentParams))
				{
					baseConstructorParams += string.IsNullOrEmpty(baseConstructorParams) ? parentParams: "," + parentParams;
				}
				parent = parent.ParentEntity;
			}

			return baseConstructorParams;
		}

		/// <summary>
		/// The parameters to a base constructor for this entity.
		/// </summary>
		/// <returns>A string formed as follows: name1, name2, name3, ...</returns>
		private string BuildBaseConstructorParams(IEnumerable<AttributeDeclaration> attributes)
		{
			return string.Join(",",attributes.Select(a=>$"{a.TypeInfo.ParameterName}\n\t\t\t\t\t"));
		}

		/// <summary>
		/// Determine whether this is the provided entity or a sub-entity of the entity.
		/// </summary>
		/// <param name="entity"></param>
		/// <returns></returns>
		public bool IsEntityOrSubtypeOfEntity(string entityName)
		{
			if(this.Name == entityName)
			{
				return true;
			}

			var parent = ParentEntity;
			while(parent != null)
			{
				if(parent.Name == entityName)
				{
					return true;
				}
				parent = parent.ParentEntity;
			}
			return false;
		}

		/// <summary>
		/// Determine whether this is the provided entity or the entity is
		/// one of this entity's children.
		/// </summary>
		/// <param name="entity"></param>
		/// <returns></returns>
		public bool IsEntityOrSupertypeOfEntity(string entityName)
		{
			if(this.Name == entityName)
			{
				return true;
			}

			var found = false;
			foreach(var e in ChildEntities)
			{
				found = e.IsEntityOrSupertypeOfEntity(entityName);
			}
			return found;
		}
	}
}