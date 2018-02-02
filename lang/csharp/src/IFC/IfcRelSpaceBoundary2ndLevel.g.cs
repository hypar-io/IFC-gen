

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelspaceboundary2ndlevel.htm"/>
	/// </summary>
	public  partial class IfcRelSpaceBoundary2ndLevel : IfcRelSpaceBoundary1stLevel
	{
		public IfcRelSpaceBoundary2ndLevel CorrespondingBoundary{get;set;} // optional
		public List<IfcRelSpaceBoundary2ndLevel> Corresponds{get;set;} // inverse


		/// <summary>
		/// Construct a IfcRelSpaceBoundary2ndLevel with all required attributes.
		/// </summary>
		public IfcRelSpaceBoundary2ndLevel(IfcGloballyUniqueId globalId,IfcSpaceBoundarySelect relatingSpace,IfcElement relatedBuildingElement,IfcPhysicalOrVirtualEnum physicalOrVirtualBoundary,IfcInternalOrExternalEnum internalOrExternalBoundary):base(globalId,relatingSpace,relatedBuildingElement,physicalOrVirtualBoundary,internalOrExternalBoundary)
		{
			Corresponds = new List<IfcRelSpaceBoundary2ndLevel>();


		}
		/// <summary>
		/// Construct a IfcRelSpaceBoundary2ndLevel with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelSpaceBoundary2ndLevel(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcSpaceBoundarySelect relatingSpace,IfcElement relatedBuildingElement,IfcConnectionGeometry connectionGeometry,IfcPhysicalOrVirtualEnum physicalOrVirtualBoundary,IfcInternalOrExternalEnum internalOrExternalBoundary,IfcRelSpaceBoundary1stLevel parentBoundary,IfcRelSpaceBoundary2ndLevel correspondingBoundary):base(globalId,ownerHistory,name,description,relatingSpace,relatedBuildingElement,connectionGeometry,physicalOrVirtualBoundary,internalOrExternalBoundary,parentBoundary)
		{
			Corresponds = new List<IfcRelSpaceBoundary2ndLevel>();

			CorrespondingBoundary = correspondingBoundary;

		}
		public static new IfcRelSpaceBoundary2ndLevel FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelSpaceBoundary2ndLevel>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingSpace != null ? RelatingSpace.ToStepValue() : "$");
			parameters.Add(RelatedBuildingElement != null ? RelatedBuildingElement.ToStepValue() : "$");
			parameters.Add(ConnectionGeometry != null ? ConnectionGeometry.ToStepValue() : "$");
			parameters.Add(PhysicalOrVirtualBoundary.ToStepValue());
			parameters.Add(InternalOrExternalBoundary.ToStepValue());
			parameters.Add(ParentBoundary != null ? ParentBoundary.ToStepValue() : "$");
			parameters.Add(CorrespondingBoundary != null ? CorrespondingBoundary.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
