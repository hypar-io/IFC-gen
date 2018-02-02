

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelprojectselement.htm"/>
	/// </summary>
	public  partial class IfcRelProjectsElement : IfcRelDecomposes
	{
		public IfcElement RelatingElement{get;set;} 
		public IfcFeatureElementAddition RelatedFeatureElement{get;set;} 


		/// <summary>
		/// Construct a IfcRelProjectsElement with all required attributes.
		/// </summary>
		public IfcRelProjectsElement(IfcGloballyUniqueId globalId,IfcElement relatingElement,IfcFeatureElementAddition relatedFeatureElement):base(globalId)
		{

			RelatingElement = relatingElement;
			RelatedFeatureElement = relatedFeatureElement;

		}
		/// <summary>
		/// Construct a IfcRelProjectsElement with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelProjectsElement(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcElement relatingElement,IfcFeatureElementAddition relatedFeatureElement):base(globalId,ownerHistory,name,description)
		{

			RelatingElement = relatingElement;
			RelatedFeatureElement = relatedFeatureElement;

		}
		public static new IfcRelProjectsElement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelProjectsElement>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingElement != null ? RelatingElement.ToStepValue() : "$");
			parameters.Add(RelatedFeatureElement != null ? RelatedFeatureElement.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
