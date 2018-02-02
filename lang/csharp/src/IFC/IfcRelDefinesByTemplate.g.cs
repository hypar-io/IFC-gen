

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbytemplate.htm"/>
	/// </summary>
	public  partial class IfcRelDefinesByTemplate : IfcRelDefines
	{
		public List<IfcPropertySetDefinition> RelatedPropertySets{get;set;} 
		public IfcPropertySetTemplate RelatingTemplate{get;set;} 


		/// <summary>
		/// Construct a IfcRelDefinesByTemplate with all required attributes.
		/// </summary>
		public IfcRelDefinesByTemplate(IfcGloballyUniqueId globalId,List<IfcPropertySetDefinition> relatedPropertySets,IfcPropertySetTemplate relatingTemplate):base(globalId)
		{

			RelatedPropertySets = relatedPropertySets;
			RelatingTemplate = relatingTemplate;

		}
		/// <summary>
		/// Construct a IfcRelDefinesByTemplate with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelDefinesByTemplate(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcPropertySetDefinition> relatedPropertySets,IfcPropertySetTemplate relatingTemplate):base(globalId,ownerHistory,name,description)
		{

			RelatedPropertySets = relatedPropertySets;
			RelatingTemplate = relatingTemplate;

		}
		public static new IfcRelDefinesByTemplate FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelDefinesByTemplate>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedPropertySets != null ? RelatedPropertySets.ToStepValue() : "$");
			parameters.Add(RelatingTemplate != null ? RelatingTemplate.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
