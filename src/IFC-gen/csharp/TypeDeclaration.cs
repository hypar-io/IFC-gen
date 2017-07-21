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
	}}

";
			return result;
		}
	}
}