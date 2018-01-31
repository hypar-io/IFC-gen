

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialrelationship.htm"/>
	/// </summary>
	public  partial class IfcMaterialRelationship : IfcResourceLevelRelationship
	{
		public IfcMaterial RelatingMaterial{get;set;} 
		public List<IfcMaterial> RelatedMaterials{get;set;} 
		public IfcLabel Expression{get;set;} // optional


		/// <summary>
		/// Construct a IfcMaterialRelationship with all required attributes.
		/// </summary>
		public IfcMaterialRelationship(IfcMaterial relatingMaterial,List<IfcMaterial> relatedMaterials):base()
		{

			RelatingMaterial = relatingMaterial;
			RelatedMaterials = relatedMaterials;

		}
		/// <summary>
		/// Construct a IfcMaterialRelationship with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialRelationship(IfcLabel name,IfcText description,IfcMaterial relatingMaterial,List<IfcMaterial> relatedMaterials,IfcLabel expression):base(name,description)
		{

			RelatingMaterial = relatingMaterial;
			RelatedMaterials = relatedMaterials;
			Expression = expression;

		}
		public static new IfcMaterialRelationship FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialRelationship>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingMaterial != null ? RelatingMaterial.ToStepValue() : "$");
			parameters.Add(RelatedMaterials != null ? RelatedMaterials.ToStepValue() : "$");
			parameters.Add(Expression != null ? Expression.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
