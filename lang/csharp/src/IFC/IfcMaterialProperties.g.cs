

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialproperties.htm"/>
	/// </summary>
	public  partial class IfcMaterialProperties : IfcExtendedProperties
	{
		public IfcMaterialDefinition Material{get;set;} 


		/// <summary>
		/// Construct a IfcMaterialProperties with all required attributes.
		/// </summary>
		public IfcMaterialProperties(List<IfcProperty> properties,IfcMaterialDefinition material):base(properties)
		{

			Material = material;

		}
		/// <summary>
		/// Construct a IfcMaterialProperties with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialProperties(IfcIdentifier name,IfcText description,List<IfcProperty> properties,IfcMaterialDefinition material):base(name,description,properties)
		{

			Material = material;

		}
		public static new IfcMaterialProperties FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialProperties>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Properties != null ? Properties.ToStepValue() : "$");
			parameters.Add(Material != null ? Material.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
