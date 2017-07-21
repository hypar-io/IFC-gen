namespace Express
{
	public class AttributeDeclaration
	{
		/// <summary>
		/// Type information for the attribute's type.
		/// </summary>
		/// <returns></returns>
		public TypeInfo TypeInfo{get;set;}

		/// <summary>
		/// A flag indicating whether the attribute is marked in
		/// EXPRESS as OPTIONAL.
		/// </summary>
		/// <returns></returns>
		public bool IsOptional{get;set;}

		/// <summary>
		/// A flag indicating whether the attribute comes from 
		/// an EXPRESS DERIVE.
		/// </summary>
		/// <returns></returns>
		public bool IsDerived{get;set;}

		public override string ToString()
		{
			return $"\t\tpublic {TypeInfo.ToString()} {TypeInfo.Name} {{get;set;}}";
		}
	}
}