

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpostaladdress.htm"/>
	/// </summary>
	public  partial class IfcPostalAddress : IfcAddress
	{
		public IfcLabel InternalLocation{get;set;} // optional
		public List<IfcLabel> AddressLines{get;set;} // optional
		public IfcLabel PostalBox{get;set;} // optional
		public IfcLabel Town{get;set;} // optional
		public IfcLabel Region{get;set;} // optional
		public IfcLabel PostalCode{get;set;} // optional
		public IfcLabel Country{get;set;} // optional


		/// <summary>
		/// Construct a IfcPostalAddress with all required attributes.
		/// </summary>
		public IfcPostalAddress():base()
		{
			AddressLines = new List<IfcLabel>();


		}
		/// <summary>
		/// Construct a IfcPostalAddress with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPostalAddress(IfcAddressTypeEnum purpose,IfcText description,IfcLabel userDefinedPurpose,IfcLabel internalLocation,List<IfcLabel> addressLines,IfcLabel postalBox,IfcLabel town,IfcLabel region,IfcLabel postalCode,IfcLabel country):base(purpose,description,userDefinedPurpose)
		{

			InternalLocation = internalLocation;
			AddressLines = addressLines;
			PostalBox = postalBox;
			Town = town;
			Region = region;
			PostalCode = postalCode;
			Country = country;

		}
		public static new IfcPostalAddress FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPostalAddress>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Purpose.ToStepValue());
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(UserDefinedPurpose != null ? UserDefinedPurpose.ToStepValue() : "$");
			parameters.Add(InternalLocation != null ? InternalLocation.ToStepValue() : "$");
			parameters.Add(AddressLines != null ? AddressLines.ToStepValue() : "$");
			parameters.Add(PostalBox != null ? PostalBox.ToStepValue() : "$");
			parameters.Add(Town != null ? Town.ToStepValue() : "$");
			parameters.Add(Region != null ? Region.ToStepValue() : "$");
			parameters.Add(PostalCode != null ? PostalCode.ToStepValue() : "$");
			parameters.Add(Country != null ? Country.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
