namespace Express
{
	public class TypeInfo
	{
		public string Name{get;set;}
		public object Type{get;set;}

		public TypeInfo(string name)
		{
			Name = name;
		}
		
		public override string ToString()
		{	
			if(Type is EnumInfo)
			{
				var e = (EnumInfo)Type;
				var enumStr =
$@"	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{Name.ToLower()}.htm
	/// </summary>
	public enum {Name} 
	{{
		{e.Values}
	}}

";
				return enumStr;
			}

			if(Type is SelectInfo)
			{
				var s = (SelectInfo)Type;
				var selectStr =
$@"	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{Name.ToLower()}.htm
	/// </summary>
	public class {Name}<T> : Select<T> where T : {s.Values} {{}}

";

				return selectStr;
			}

			// Create a 'using' directive which will allow
			// us to to use this alias anywhere in the namespace.
			if(Type == null)
			{
				return $"***ERROR FOR TYPE {Name}";
			}
			return $"\tusing {Name} = {Type.ToString()};\n";
		}
	}


	public class AtomicTypeInfo
	{
		private string type;
		public AtomicTypeInfo(string type)
		{
			this.type = type;
		}

		public override string ToString()
		{
			var retType = "object";
			switch(type)
			{
				case "BOOLEAN":
					retType = "bool";
					break;
				case "LOGICAL":
					retType = "bool?";
					break;
				case "REAL":
					retType = "double";
					break;
				case "STRING":
					retType = "string";
					break;
				case "INTEGER":
					retType = "int";
					break;
				case "NUMBER":
					retType = "double";
					break;
				default:
					retType = type;
					break;
			}
			return retType;
		}
	}

	public class AttributeInfo : TypeInfo
	{
		public bool IsOptional{get;set;}

		public AttributeInfo(string name) : base(name){}

		public override string ToString()
		{
			if(Type == null)
			{
				return $"***ERROR FOR ATTRIBUTE {Name}";
			}
			var attStr =$"\t\tpublic {Type.ToString()} {Name} {{get;set;}}\n";

			return attStr;
		}
	}
}