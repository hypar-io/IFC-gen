

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialdefinitionrepresentation.htm"/>
	/// </summary>
	public  partial class IfcMaterialDefinitionRepresentation : IfcProductRepresentation
	{
		public IfcMaterial RepresentedMaterial{get;set;} 


		/// <summary>
		/// Construct a IfcMaterialDefinitionRepresentation with all required attributes.
		/// </summary>
		public IfcMaterialDefinitionRepresentation(List<IfcRepresentation> representations,IfcMaterial representedMaterial):base(representations)
		{

			RepresentedMaterial = representedMaterial;

		}
		/// <summary>
		/// Construct a IfcMaterialDefinitionRepresentation with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialDefinitionRepresentation(IfcLabel name,IfcText description,List<IfcRepresentation> representations,IfcMaterial representedMaterial):base(name,description,representations)
		{

			RepresentedMaterial = representedMaterial;

		}
		public static new IfcMaterialDefinitionRepresentation FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialDefinitionRepresentation>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Representations != null ? Representations.ToStepValue() : "$");
			parameters.Add(RepresentedMaterial != null ? RepresentedMaterial.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
