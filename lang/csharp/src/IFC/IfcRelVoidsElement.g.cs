

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelvoidselement.htm"/>
	/// </summary>
	public  partial class IfcRelVoidsElement : IfcRelDecomposes
	{
		public IfcElement RelatingBuildingElement{get;set;} 
		public IfcFeatureElementSubtraction RelatedOpeningElement{get;set;} 


		/// <summary>
		/// Construct a IfcRelVoidsElement with all required attributes.
		/// </summary>
		public IfcRelVoidsElement(IfcGloballyUniqueId globalId,IfcElement relatingBuildingElement,IfcFeatureElementSubtraction relatedOpeningElement):base(globalId)
		{

			RelatingBuildingElement = relatingBuildingElement;
			RelatedOpeningElement = relatedOpeningElement;

		}
		/// <summary>
		/// Construct a IfcRelVoidsElement with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelVoidsElement(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcElement relatingBuildingElement,IfcFeatureElementSubtraction relatedOpeningElement):base(globalId,ownerHistory,name,description)
		{

			RelatingBuildingElement = relatingBuildingElement;
			RelatedOpeningElement = relatedOpeningElement;

		}
		public static new IfcRelVoidsElement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelVoidsElement>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingBuildingElement != null ? RelatingBuildingElement.ToStepValue() : "$");
			parameters.Add(RelatedOpeningElement != null ? RelatedOpeningElement.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
