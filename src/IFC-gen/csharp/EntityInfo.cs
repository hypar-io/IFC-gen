using System;
using System.Linq;
using System.Text;
using System.Collections.Generic;

namespace Express
{
	public class EntityInfo
	{

		public string Name {get;set;}
		public List<string> SupertypeOf {get;set;}

		public List<string> SubtypeOf {get;set;}
		
		public List<AttributeInfo> Attributes{get;set;}

		public bool IsAbstract{get;set;}

		public string Modifier
		{
			get
			{
				return IsAbstract? "abstract" : string.Empty;
			}
		}

		public EntityInfo(string name)
		{
			Name = name;
			Attributes = new List<AttributeInfo>();
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
			foreach(var a in Attributes.Where(a=>a.Type is CollectionInfo))
			{
				var coll = (CollectionInfo)a.Type;
				if(a.Type is SetInfo || a.Type is ListInfo)
				{
					allocBuilder.Append($"\t\t\t{a.Name} = new {string.Join("",Enumerable.Repeat("List<",coll.Rank))}{coll.Type}{string.Join("",Enumerable.Repeat(">",coll.Rank))}();\n");
				}
				else if(a.Type is ArrayInfo)
				{
					var allocStr = $"[{coll.Size}]";
					allocBuilder.Append($"\t\t\t{a.Name} = new {coll.Type}{string.Join("",Enumerable.Repeat(allocStr,coll.Rank))}();\n");
				}
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