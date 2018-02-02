

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstogroupbyfactor.htm"/>
	/// </summary>
	public  partial class IfcRelAssignsToGroupByFactor : IfcRelAssignsToGroup
	{
		public IfcRatioMeasure Factor{get;set;} 


		/// <summary>
		/// Construct a IfcRelAssignsToGroupByFactor with all required attributes.
		/// </summary>
		public IfcRelAssignsToGroupByFactor(IfcGloballyUniqueId globalId,List<IfcObjectDefinition> relatedObjects,IfcGroup relatingGroup,IfcRatioMeasure factor):base(globalId,relatedObjects,relatingGroup)
		{

			Factor = factor;

		}
		/// <summary>
		/// Construct a IfcRelAssignsToGroupByFactor with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelAssignsToGroupByFactor(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcObjectDefinition> relatedObjects,IfcObjectTypeEnum relatedObjectsType,IfcGroup relatingGroup,IfcRatioMeasure factor):base(globalId,ownerHistory,name,description,relatedObjects,relatedObjectsType,relatingGroup)
		{

			Factor = factor;

		}
		public static new IfcRelAssignsToGroupByFactor FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelAssignsToGroupByFactor>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");
			parameters.Add(RelatedObjectsType.ToStepValue());
			parameters.Add(RelatingGroup != null ? RelatingGroup.ToStepValue() : "$");
			parameters.Add(Factor != null ? Factor.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
