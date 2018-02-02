

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsite.htm"/>
	/// </summary>
	public  partial class IfcSite : IfcSpatialStructureElement
	{
		public IfcCompoundPlaneAngleMeasure RefLatitude{get;set;} // optional
		public IfcCompoundPlaneAngleMeasure RefLongitude{get;set;} // optional
		public IfcLengthMeasure RefElevation{get;set;} // optional
		public IfcLabel LandTitleNumber{get;set;} // optional
		public IfcPostalAddress SiteAddress{get;set;} // optional


		/// <summary>
		/// Construct a IfcSite with all required attributes.
		/// </summary>
		public IfcSite(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcSite with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSite(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcLabel longName,IfcElementCompositionEnum compositionType,IfcCompoundPlaneAngleMeasure refLatitude,IfcCompoundPlaneAngleMeasure refLongitude,IfcLengthMeasure refElevation,IfcLabel landTitleNumber,IfcPostalAddress siteAddress):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,longName,compositionType)
		{

			RefLatitude = refLatitude;
			RefLongitude = refLongitude;
			RefElevation = refElevation;
			LandTitleNumber = landTitleNumber;
			SiteAddress = siteAddress;

		}
		public static new IfcSite FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSite>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(ObjectPlacement != null ? ObjectPlacement.ToStepValue() : "$");
			parameters.Add(Representation != null ? Representation.ToStepValue() : "$");
			parameters.Add(LongName != null ? LongName.ToStepValue() : "$");
			parameters.Add(CompositionType.ToStepValue());
			parameters.Add(RefLatitude != null ? RefLatitude.ToStepValue() : "$");
			parameters.Add(RefLongitude != null ? RefLongitude.ToStepValue() : "$");
			parameters.Add(RefElevation != null ? RefElevation.ToStepValue() : "$");
			parameters.Add(LandTitleNumber != null ? LandTitleNumber.ToStepValue() : "$");
			parameters.Add(SiteAddress != null ? SiteAddress.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
