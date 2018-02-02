

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelspaceboundary1stlevel.htm"/>
	/// </summary>
	public  partial class IfcRelSpaceBoundary1stLevel : IfcRelSpaceBoundary
	{
		public IfcRelSpaceBoundary1stLevel ParentBoundary{get;set;} // optional
		public List<IfcRelSpaceBoundary1stLevel> InnerBoundaries{get;set;} // inverse


		/// <summary>
		/// Construct a IfcRelSpaceBoundary1stLevel with all required attributes.
		/// </summary>
		public IfcRelSpaceBoundary1stLevel(IfcGloballyUniqueId globalId,IfcSpaceBoundarySelect relatingSpace,IfcElement relatedBuildingElement,IfcPhysicalOrVirtualEnum physicalOrVirtualBoundary,IfcInternalOrExternalEnum internalOrExternalBoundary):base(globalId,relatingSpace,relatedBuildingElement,physicalOrVirtualBoundary,internalOrExternalBoundary)
		{
			InnerBoundaries = new List<IfcRelSpaceBoundary1stLevel>();


		}
		/// <summary>
		/// Construct a IfcRelSpaceBoundary1stLevel with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelSpaceBoundary1stLevel(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcSpaceBoundarySelect relatingSpace,IfcElement relatedBuildingElement,IfcConnectionGeometry connectionGeometry,IfcPhysicalOrVirtualEnum physicalOrVirtualBoundary,IfcInternalOrExternalEnum internalOrExternalBoundary,IfcRelSpaceBoundary1stLevel parentBoundary):base(globalId,ownerHistory,name,description,relatingSpace,relatedBuildingElement,connectionGeometry,physicalOrVirtualBoundary,internalOrExternalBoundary)
		{
			InnerBoundaries = new List<IfcRelSpaceBoundary1stLevel>();

			ParentBoundary = parentBoundary;

		}
		public static new IfcRelSpaceBoundary1stLevel FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelSpaceBoundary1stLevel>(json); }

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

            return string.Join(", ", parameters.ToArray());
        }
	}
}
