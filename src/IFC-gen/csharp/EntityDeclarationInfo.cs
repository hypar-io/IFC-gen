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
			foreach(var a in Attributes)
			{
				propStringBuilder.Append(a.ToString());
			}

			var supertype = string.Empty;
			if(SubtypeOf.Any())
			{
				supertype = " : " + string.Join(",",SubtypeOf);
			}

			var allocBuilder = new StringBuilder();
			foreach(var a in Attributes.Where(a=>a.TypeInfo is CollectionInfo))
			{
				allocBuilder.Append($"\t\t\t{a.TypeInfo.Name} = new {a.TypeInfo.ToString()}();\n");
			}

			var classStr =
$@"
	/// <summary>
	/// <see href=""http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{Name.ToLower()}.htm""/>
	/// </summary>
	public {Modifier} partial class {Name}{supertype}
	{{
{propStringBuilder.ToString()}
		public {Name}()
		{{
{allocBuilder.ToString()}
		}}
	}}
	";
			return classStr;
		}
	}
}