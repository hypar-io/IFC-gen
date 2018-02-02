

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctelecomaddress.htm"/>
	/// </summary>
	public  partial class IfcTelecomAddress : IfcAddress
	{
		public List<IfcLabel> TelephoneNumbers{get;set;} // optional
		public List<IfcLabel> FacsimileNumbers{get;set;} // optional
		public IfcLabel PagerNumber{get;set;} // optional
		public List<IfcLabel> ElectronicMailAddresses{get;set;} // optional
		public IfcURIReference WWWHomePageURL{get;set;} // optional
		public List<IfcURIReference> MessagingIDs{get;set;} // optional


		/// <summary>
		/// Construct a IfcTelecomAddress with all required attributes.
		/// </summary>
		public IfcTelecomAddress():base()
		{
			TelephoneNumbers = new List<IfcLabel>();
			FacsimileNumbers = new List<IfcLabel>();
			ElectronicMailAddresses = new List<IfcLabel>();
			MessagingIDs = new List<IfcURIReference>();


		}
		/// <summary>
		/// Construct a IfcTelecomAddress with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTelecomAddress(IfcAddressTypeEnum purpose,IfcText description,IfcLabel userDefinedPurpose,List<IfcLabel> telephoneNumbers,List<IfcLabel> facsimileNumbers,IfcLabel pagerNumber,List<IfcLabel> electronicMailAddresses,IfcURIReference wWWHomePageURL,List<IfcURIReference> messagingIDs):base(purpose,description,userDefinedPurpose)
		{

			TelephoneNumbers = telephoneNumbers;
			FacsimileNumbers = facsimileNumbers;
			PagerNumber = pagerNumber;
			ElectronicMailAddresses = electronicMailAddresses;
			WWWHomePageURL = wWWHomePageURL;
			MessagingIDs = messagingIDs;

		}
		public static new IfcTelecomAddress FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTelecomAddress>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Purpose.ToStepValue());
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(UserDefinedPurpose != null ? UserDefinedPurpose.ToStepValue() : "$");
			parameters.Add(TelephoneNumbers != null ? TelephoneNumbers.ToStepValue() : "$");
			parameters.Add(FacsimileNumbers != null ? FacsimileNumbers.ToStepValue() : "$");
			parameters.Add(PagerNumber != null ? PagerNumber.ToStepValue() : "$");
			parameters.Add(ElectronicMailAddresses != null ? ElectronicMailAddresses.ToStepValue() : "$");
			parameters.Add(WWWHomePageURL != null ? WWWHomePageURL.ToStepValue() : "$");
			parameters.Add(MessagingIDs != null ? MessagingIDs.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
