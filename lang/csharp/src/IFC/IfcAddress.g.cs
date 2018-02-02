

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaddress.htm"/>
	/// </summary>
	public abstract partial class IfcAddress : BaseIfc
	{
		public IfcAddressTypeEnum Purpose{get;set;} // optional
		public IfcText Description{get;set;} // optional
		public IfcLabel UserDefinedPurpose{get;set;} // optional
		public List<IfcPerson> OfPerson{get;set;} // inverse
		public List<IfcOrganization> OfOrganization{get;set;} // inverse


		/// <summary>
		/// Construct a IfcAddress with all required attributes.
		/// </summary>
		public IfcAddress():base()
		{
			OfPerson = new List<IfcPerson>();
			OfOrganization = new List<IfcOrganization>();


		}
		/// <summary>
		/// Construct a IfcAddress with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcAddress(IfcAddressTypeEnum purpose,IfcText description,IfcLabel userDefinedPurpose):base()
		{
			OfPerson = new List<IfcPerson>();
			OfOrganization = new List<IfcOrganization>();

			Purpose = purpose;
			Description = description;
			UserDefinedPurpose = userDefinedPurpose;

		}
		public static  IfcAddress FromJSON(string json){ return JsonConvert.DeserializeObject<IfcAddress>(json); }

	}
}
