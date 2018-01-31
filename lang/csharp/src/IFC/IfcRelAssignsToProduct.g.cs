

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoproduct.htm"/>
	/// </summary>
	public  partial class IfcRelAssignsToProduct : IfcRelAssigns
	{
		public IfcProductSelect RelatingProduct{get;set;} 


		/// <summary>
		/// Construct a IfcRelAssignsToProduct with all required attributes.
		/// </summary>
		public IfcRelAssignsToProduct(IfcGloballyUniqueId globalId,List<IfcObjectDefinition> relatedObjects,IfcProductSelect relatingProduct):base(globalId,relatedObjects)
		{

			RelatingProduct = relatingProduct;

		}
		/// <summary>
		/// Construct a IfcRelAssignsToProduct with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelAssignsToProduct(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcObjectDefinition> relatedObjects,IfcObjectTypeEnum relatedObjectsType,IfcProductSelect relatingProduct):base(globalId,ownerHistory,name,description,relatedObjects,relatedObjectsType)
		{

			RelatingProduct = relatingProduct;

		}
		public static new IfcRelAssignsToProduct FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelAssignsToProduct>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");
			parameters.Add(RelatedObjectsType.ToStepValue());
			parameters.Add(RelatingProduct != null ? RelatingProduct.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
