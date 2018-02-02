

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayer.htm"/>
	/// </summary>
	public  partial class IfcMaterialLayer : IfcMaterialDefinition
	{
		public IfcMaterial Material{get;set;} // optional
		public IfcNonNegativeLengthMeasure LayerThickness{get;set;} 
		public IfcLogical IsVentilated{get;set;} // optional
		public IfcLabel Name{get;set;} // optional
		public IfcText Description{get;set;} // optional
		public IfcLabel Category{get;set;} // optional
		public IfcInteger Priority{get;set;} // optional
		public IfcMaterialLayerSet ToMaterialLayerSet{get;set;} // inverse


		/// <summary>
		/// Construct a IfcMaterialLayer with all required attributes.
		/// </summary>
		public IfcMaterialLayer(IfcNonNegativeLengthMeasure layerThickness):base()
		{

			LayerThickness = layerThickness;

		}
		/// <summary>
		/// Construct a IfcMaterialLayer with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialLayer(IfcMaterial material,IfcNonNegativeLengthMeasure layerThickness,IfcLogical isVentilated,IfcLabel name,IfcText description,IfcLabel category,IfcInteger priority):base()
		{

			Material = material;
			LayerThickness = layerThickness;
			IsVentilated = isVentilated;
			Name = name;
			Description = description;
			Category = category;
			Priority = priority;

		}
		public static new IfcMaterialLayer FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialLayer>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Material != null ? Material.ToStepValue() : "$");
			parameters.Add(LayerThickness != null ? LayerThickness.ToStepValue() : "$");
			parameters.Add(IsVentilated != null ? IsVentilated.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Category != null ? Category.ToStepValue() : "$");
			parameters.Add(Priority != null ? Priority.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
