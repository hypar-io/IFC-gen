/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcPostalAddress : IfcAddress 
	{
		public IfcPostalAddress(IfcPostalAddressAddressLines addressLines,
				String internalLocation,
				String postalBox,
				String town,
				String region,
				String postalCode,
				String country,
				IfcAddressTypeEnum purpose,
				Boolean purposeSpecified,
				String description,
				String userDefinedPurpose) : base(purpose,
				purposeSpecified,
				description,
				userDefinedPurpose)
		{
			this.addressLinesField = addressLines;
			this.internalLocationField = internalLocation;
			this.postalBoxField = postalBox;
			this.townField = town;
			this.regionField = region;
			this.postalCodeField = postalCode;
			this.countryField = country;
		}
	}
}