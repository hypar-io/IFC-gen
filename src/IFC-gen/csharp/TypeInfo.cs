namespace Express
{
	public class TypeDeclaration
	{
		public TypeInfo TypeInfo{get;private set;}

		public TypeDeclaration(TypeInfo info)
		{
			TypeInfo = info;
		}

		public override string ToString()
		{	
			if(TypeInfo is EnumInfo || TypeInfo is SelectInfo)
			{
				return TypeInfo.ToString();
			}

			return $"\tusing {TypeInfo.Name} = {TypeInfo.ToString()};\n";
		}
	}

	public abstract class TypeInfo
	{
		public string Name{get;set;}

		public string ValueType{get;set;}

		public TypeInfo(string name)
		{
			Name = name;
		}

		public static string ToSystemType(string type)
		{
			var retType = type;
			switch(type)
			{
				case "BOOLEAN":
					retType = "System.Boolean";
					break;
				case "LOGICAL":
					retType = "System.Boolean?";
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
	}

	public abstract class StringList : TypeInfo
	{
		public string Values{get;set;}

		public StringList(string name) : base(name){}
	}

	public class EnumInfo : StringList
	{
		public EnumInfo(string name) : base(name){}

		public override string ToString()
		{
var result = 
	$@"	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{Name.ToLower()}.htm
	/// </summary>
	public enum {Name} 
	{{
		{Values}
	}}
";
			return result;
		}
	}

	public class SelectInfo : StringList
	{
		public SelectInfo(string name) : base(name){}

		public override string ToString()
		{
			var result = 
	$@"	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{Name.ToLower()}.htm
	/// </summary>
	public class {Name}<T> : Select<T> where T : {Values} {{}}
";

			return result;
		}
	}

	public class DefinedTypeInfo : TypeInfo
	{
		public DefinedTypeInfo(string name) : base(name){}

		public override string ToString()
		{	
			return $"{TypeInfo.ToSystemType(ValueType)}";
		}
	}

	public class AttributeDeclaration
	{
		public TypeInfo TypeInfo{get;set;}
		public bool IsOptional{get;set;}

		public bool IsDerived{get;set;}
		
		public override string ToString()
		{
			return $"\t\tpublic {TypeInfo.ToString()} {TypeInfo.Name} {{get;set;}}\n";
		}
	}
}