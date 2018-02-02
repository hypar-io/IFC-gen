

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterial.htm"/>
	/// </summary>
	public  partial class IfcMaterial : IfcMaterialDefinition
	{
		public IfcLabel Name{get;set;} 
		public IfcText Description{get;set;} // optional
		public IfcLabel Category{get;set;} // optional
		public List<IfcMaterialDefinitionRepresentation> HasRepresentation{get;set;} // inverse
		public List<IfcMaterialRelationship> IsRelatedWith{get;set;} // inverse
		public List<IfcMaterialRelationship> RelatesTo{get;set;} // inverse


		/// <summary>
		/// Construct a IfcMaterial with all required attributes.
		/// </summary>
		public IfcMaterial(IfcLabel name):base()
		{
			HasRepresentation = new List<IfcMaterialDefinitionRepresentation>();
			IsRelatedWith = new List<IfcMaterialRelationship>();
			RelatesTo = new List<IfcMaterialRelationship>();

			Name = name;

		}
		/// <summary>
		/// Construct a IfcMaterial with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterial(IfcLabel name,IfcText description,IfcLabel category):base()
		{
			HasRepresentation = new List<IfcMaterialDefinitionRepresentation>();
			IsRelatedWith = new List<IfcMaterialRelationship>();
			RelatesTo = new List<IfcMaterialRelationship>();

			Name = name;
			Description = description;
			Category = category;

		}
		public static new IfcMaterial FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterial>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Category != null ? Category.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
