

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelcoversbldgelements.htm"/>
	/// </summary>
	public  partial class IfcRelCoversBldgElements : IfcRelConnects
	{
		public IfcElement RelatingBuildingElement{get;set;} 
		public List<IfcCovering> RelatedCoverings{get;set;} 


		/// <summary>
		/// Construct a IfcRelCoversBldgElements with all required attributes.
		/// </summary>
		public IfcRelCoversBldgElements(IfcGloballyUniqueId globalId,IfcElement relatingBuildingElement,List<IfcCovering> relatedCoverings):base(globalId)
		{

			RelatingBuildingElement = relatingBuildingElement;
			RelatedCoverings = relatedCoverings;

		}
		/// <summary>
		/// Construct a IfcRelCoversBldgElements with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelCoversBldgElements(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcElement relatingBuildingElement,List<IfcCovering> relatedCoverings):base(globalId,ownerHistory,name,description)
		{

			RelatingBuildingElement = relatingBuildingElement;
			RelatedCoverings = relatedCoverings;

		}
		public static new IfcRelCoversBldgElements FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelCoversBldgElements>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingBuildingElement != null ? RelatingBuildingElement.ToStepValue() : "$");
			parameters.Add(RelatedCoverings != null ? RelatedCoverings.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
