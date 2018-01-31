

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoresource.htm"/>
	/// </summary>
	public  partial class IfcRelAssignsToResource : IfcRelAssigns
	{
		public IfcResourceSelect RelatingResource{get;set;} 


		/// <summary>
		/// Construct a IfcRelAssignsToResource with all required attributes.
		/// </summary>
		public IfcRelAssignsToResource(IfcGloballyUniqueId globalId,List<IfcObjectDefinition> relatedObjects,IfcResourceSelect relatingResource):base(globalId,relatedObjects)
		{

			RelatingResource = relatingResource;

		}
		/// <summary>
		/// Construct a IfcRelAssignsToResource with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelAssignsToResource(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcObjectDefinition> relatedObjects,IfcObjectTypeEnum relatedObjectsType,IfcResourceSelect relatingResource):base(globalId,ownerHistory,name,description,relatedObjects,relatedObjectsType)
		{

			RelatingResource = relatingResource;

		}
		public static new IfcRelAssignsToResource FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelAssignsToResource>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");
			parameters.Add(RelatedObjectsType.ToStepValue());
			parameters.Add(RelatingResource != null ? RelatingResource.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
