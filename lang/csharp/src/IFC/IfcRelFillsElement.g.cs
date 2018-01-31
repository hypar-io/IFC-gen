

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelfillselement.htm"/>
	/// </summary>
	public  partial class IfcRelFillsElement : IfcRelConnects
	{
		public IfcOpeningElement RelatingOpeningElement{get;set;} 
		public IfcElement RelatedBuildingElement{get;set;} 


		/// <summary>
		/// Construct a IfcRelFillsElement with all required attributes.
		/// </summary>
		public IfcRelFillsElement(IfcGloballyUniqueId globalId,IfcOpeningElement relatingOpeningElement,IfcElement relatedBuildingElement):base(globalId)
		{

			RelatingOpeningElement = relatingOpeningElement;
			RelatedBuildingElement = relatedBuildingElement;

		}
		/// <summary>
		/// Construct a IfcRelFillsElement with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelFillsElement(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcOpeningElement relatingOpeningElement,IfcElement relatedBuildingElement):base(globalId,ownerHistory,name,description)
		{

			RelatingOpeningElement = relatingOpeningElement;
			RelatedBuildingElement = relatedBuildingElement;

		}
		public static new IfcRelFillsElement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelFillsElement>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingOpeningElement != null ? RelatingOpeningElement.ToStepValue() : "$");
			parameters.Add(RelatedBuildingElement != null ? RelatedBuildingElement.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
