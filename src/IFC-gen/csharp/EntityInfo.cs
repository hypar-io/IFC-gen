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
				propStringBuilder.AppendLine(a.ToString());
			}

			var supertype = string.Empty;
			if(SubtypeOf.Any())
			{
				supertype = " : " + string.Join(",",SubtypeOf);
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

		}}
	}}
	";
			return classStr;
		}
	}
}