using System;
using System.Linq;
using System.Text;
using System.Collections.Generic;

namespace Express
{
	public class EntityDeclarationInfo
	{

		public string Name {get;set;}
		
		public List<string> SupertypeOf {get;set;}

		public List<string> SubtypeOf {get;set;}
		
		public EntityDeclarationInfo ParentType{get;set;}

		public List<AttributeDeclaration> Attributes{get;set;}

		public bool IsAbstract{get;set;}
		
		public string Modifier
		{
			get
			{
				return IsAbstract? "abstract" : string.Empty;
			}
		}

		public EntityDeclarationInfo(string name)
		{
			Name = name;
			Attributes = new List<AttributeDeclaration>();
			SupertypeOf = new List<string>();
			SubtypeOf = new List<string>();
		}

		public override string ToString()
		{
			var propStringBuilder = new StringBuilder();
			foreach(var a in Attributes.Where(a=>!a.IsDerived))
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
			foreach(var a in Attributes.Where(a=>!a.IsOptional && !a.IsDerived))
			{
				assignBuilder.AppendLine($"\t\t\t{a.TypeInfo.Name} = {a.TypeInfo.ParameterName};");
			}

			var classStr =
$@"
	/// <summary>
	/// <see href=""http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{Name.ToLower()}.htm""/>
	/// </summary>
	public {Modifier} partial class {Name}{supertype}
	{{
{propStringBuilder.ToString()}
		public {Name}({ConstructorParameters()}){baseConstructor}
		{{
{assignBuilder.ToString()}
		}}
	}}
";
			return classStr;
		}

		/// <summary>
		/// The parameters to a constructor for this entity, including parameters which
		/// will be fed to the base constructor. Parameters do not include optional attributes.
		/// </summary>
		/// <returns>Returns a string formed as follows: Type1 name1, Type2 name2, ... </returns>
		private string ConstructorParameters()
		{
			var constructorParams = BuildConstructorParameters(Attributes.Where(a=>!a.IsOptional && !a.IsDerived));

			var parent = ParentType;
			while(parent != null && parent.Name != "IfcRoot")
			{
				var baseConstructorParams = parent.BuildConstructorParameters(parent.Attributes.Where(a=>!a.IsOptional && !a.IsDerived));
				if(!string.IsNullOrEmpty(baseConstructorParams))
				{
					constructorParams += string.IsNullOrEmpty(constructorParams)?baseConstructorParams:","+baseConstructorParams;
				}
				parent = parent.ParentType;
			}
			
			return constructorParams;
		}

		private string BuildConstructorParameters(IEnumerable<AttributeDeclaration> attributes)
		{
			return string.Join(",",attributes.Select(a=>$"{a.TypeInfo.ToString()} {a.TypeInfo.ParameterName}\n\t\t\t\t"));
		}

		private string BaseConstructorParameters()
		{
			var baseConstructorParams = string.Empty;

			var parent = ParentType;
			while(parent != null && parent.Name != "IfcRoot")
			{
				var parentParams = BuildBaseConstructorParams(parent.Attributes.Where(a=>!a.IsOptional && !a.IsDerived));
				if(!string.IsNullOrEmpty(parentParams))
				{
					baseConstructorParams += string.IsNullOrEmpty(baseConstructorParams) ? parentParams: "," + parentParams;
				}
				parent = parent.ParentType;
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
	}
}