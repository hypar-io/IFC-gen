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

		public bool ShouldAssignInConstructor()
		{
			return !IsDerived && !IsOptional && !TypeInfo.IsDerivedFromRelationship();
		}

		public string ToAssignmentString()
		{
			if(!IsDerived && !IsOptional && !TypeInfo.IsDerivedFromRelationship())
			{
				return $"{TypeInfo.Name} = {TypeInfo.ParameterName};";
			}
			return string.Empty;
		}

		public string ToInitializationString()
		{
			if(!IsDerived && IsOptional && (TypeInfo is CollectionInfo))
			{
				return $"{TypeInfo.Name} = new {TypeInfo.ToString()}();";
			}
			return string.Empty;
		}

		public override string ToString()
		{
			var optionalComment = IsOptional?"// optional":string.Empty;
			var prop=
$@"		[JsonProperty(""{TypeInfo.JsonPropertyName}"")]
		public {TypeInfo.ToString()} {TypeInfo.Name} {{get;set;}} {optionalComment}";
			return prop;
		}
	}
}