

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelspaceboundary.htm"/>
	/// </summary>
	public  partial class IfcRelSpaceBoundary : IfcRelConnects
	{
		public IfcSpaceBoundarySelect RelatingSpace{get;set;} 
		public IfcElement RelatedBuildingElement{get;set;} 
		public IfcConnectionGeometry ConnectionGeometry{get;set;} // optional
		public IfcPhysicalOrVirtualEnum PhysicalOrVirtualBoundary{get;set;} 
		public IfcInternalOrExternalEnum InternalOrExternalBoundary{get;set;} 


		/// <summary>
		/// Construct a IfcRelSpaceBoundary with all required attributes.
		/// </summary>
		public IfcRelSpaceBoundary(IfcGloballyUniqueId globalId,IfcSpaceBoundarySelect relatingSpace,IfcElement relatedBuildingElement,IfcPhysicalOrVirtualEnum physicalOrVirtualBoundary,IfcInternalOrExternalEnum internalOrExternalBoundary):base(globalId)
		{

			RelatingSpace = relatingSpace;
			RelatedBuildingElement = relatedBuildingElement;
			PhysicalOrVirtualBoundary = physicalOrVirtualBoundary;
			InternalOrExternalBoundary = internalOrExternalBoundary;

		}
		/// <summary>
		/// Construct a IfcRelSpaceBoundary with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelSpaceBoundary(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcSpaceBoundarySelect relatingSpace,IfcElement relatedBuildingElement,IfcConnectionGeometry connectionGeometry,IfcPhysicalOrVirtualEnum physicalOrVirtualBoundary,IfcInternalOrExternalEnum internalOrExternalBoundary):base(globalId,ownerHistory,name,description)
		{

			RelatingSpace = relatingSpace;
			RelatedBuildingElement = relatedBuildingElement;
			ConnectionGeometry = connectionGeometry;
			PhysicalOrVirtualBoundary = physicalOrVirtualBoundary;
			InternalOrExternalBoundary = internalOrExternalBoundary;

		}
		public static new IfcRelSpaceBoundary FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelSpaceBoundary>(json); }

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

            return string.Join(", ", parameters.ToArray());
        }
	}
}
