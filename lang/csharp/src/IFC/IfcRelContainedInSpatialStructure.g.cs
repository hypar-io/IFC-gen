

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelcontainedinspatialstructure.htm"/>
	/// </summary>
	public  partial class IfcRelContainedInSpatialStructure : IfcRelConnects
	{
		public List<IfcProduct> RelatedElements{get;set;} 
		public IfcSpatialElement RelatingStructure{get;set;} 


		/// <summary>
		/// Construct a IfcRelContainedInSpatialStructure with all required attributes.
		/// </summary>
		public IfcRelContainedInSpatialStructure(IfcGloballyUniqueId globalId,List<IfcProduct> relatedElements,IfcSpatialElement relatingStructure):base(globalId)
		{

			RelatedElements = relatedElements;
			RelatingStructure = relatingStructure;

		}
		/// <summary>
		/// Construct a IfcRelContainedInSpatialStructure with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelContainedInSpatialStructure(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcProduct> relatedElements,IfcSpatialElement relatingStructure):base(globalId,ownerHistory,name,description)
		{

			RelatedElements = relatedElements;
			RelatingStructure = relatingStructure;

		}
		public static new IfcRelContainedInSpatialStructure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelContainedInSpatialStructure>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedElements != null ? RelatedElements.ToStepValue() : "$");
			parameters.Add(RelatingStructure != null ? RelatingStructure.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
