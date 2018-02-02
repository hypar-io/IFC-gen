

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesmaterial.htm"/>
	/// </summary>
	public  partial class IfcRelAssociatesMaterial : IfcRelAssociates
	{
		public IfcMaterialSelect RelatingMaterial{get;set;} 


		/// <summary>
		/// Construct a IfcRelAssociatesMaterial with all required attributes.
		/// </summary>
		public IfcRelAssociatesMaterial(IfcGloballyUniqueId globalId,List<IfcDefinitionSelect> relatedObjects,IfcMaterialSelect relatingMaterial):base(globalId,relatedObjects)
		{

			RelatingMaterial = relatingMaterial;

		}
		/// <summary>
		/// Construct a IfcRelAssociatesMaterial with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelAssociatesMaterial(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcDefinitionSelect> relatedObjects,IfcMaterialSelect relatingMaterial):base(globalId,ownerHistory,name,description,relatedObjects)
		{

			RelatingMaterial = relatingMaterial;

		}
		public static new IfcRelAssociatesMaterial FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelAssociatesMaterial>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");
			parameters.Add(RelatingMaterial != null ? RelatingMaterial.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
