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

			var result = 
	$@"	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{TypeInfo.Name.ToLower()}.htm
	/// </summary>
	public class {TypeInfo.Name} : IfcType<{TypeInfo.ToString()}>
	{{
		public {TypeInfo.Name}({TypeInfo.ToString()} value):base(value){{}}	

		public static implicit operator {TypeInfo.ToString()}({TypeInfo.Name} v)
		{{
			return v.Value;
		}}

		public static implicit operator {TypeInfo.Name}({TypeInfo.ToString()} v)
		{{
			return new {TypeInfo.Name}(v);
		}}	

		public static {TypeInfo.Name} FromJSON(string json)
		{{
			return JsonConvert.DeserializeObject<{TypeInfo.Name}>(json);
		}}

		public static {TypeInfo.Name} FromSTEP(string step)
		{{
			throw new NotImplementedException();
		}}
	}}

";
			return result;
		}
	}
}