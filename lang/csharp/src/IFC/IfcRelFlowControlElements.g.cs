

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelflowcontrolelements.htm"/>
	/// </summary>
	public  partial class IfcRelFlowControlElements : IfcRelConnects
	{
		public List<IfcDistributionControlElement> RelatedControlElements{get;set;} 
		public IfcDistributionFlowElement RelatingFlowElement{get;set;} 


		/// <summary>
		/// Construct a IfcRelFlowControlElements with all required attributes.
		/// </summary>
		public IfcRelFlowControlElements(IfcGloballyUniqueId globalId,List<IfcDistributionControlElement> relatedControlElements,IfcDistributionFlowElement relatingFlowElement):base(globalId)
		{

			RelatedControlElements = relatedControlElements;
			RelatingFlowElement = relatingFlowElement;

		}
		/// <summary>
		/// Construct a IfcRelFlowControlElements with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelFlowControlElements(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcDistributionControlElement> relatedControlElements,IfcDistributionFlowElement relatingFlowElement):base(globalId,ownerHistory,name,description)
		{

			RelatedControlElements = relatedControlElements;
			RelatingFlowElement = relatingFlowElement;

		}
		public static new IfcRelFlowControlElements FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelFlowControlElements>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedControlElements != null ? RelatedControlElements.ToStepValue() : "$");
			parameters.Add(RelatingFlowElement != null ? RelatingFlowElement.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
