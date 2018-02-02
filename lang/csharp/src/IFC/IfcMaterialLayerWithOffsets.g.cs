

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayerwithoffsets.htm"/>
	/// </summary>
	public  partial class IfcMaterialLayerWithOffsets : IfcMaterialLayer
	{
		public IfcLayerSetDirectionEnum OffsetDirection{get;set;} 
		public List<IfcLengthMeasure> OffsetValues{get;set;} 


		/// <summary>
		/// Construct a IfcMaterialLayerWithOffsets with all required attributes.
		/// </summary>
		public IfcMaterialLayerWithOffsets(IfcNonNegativeLengthMeasure layerThickness,IfcLayerSetDirectionEnum offsetDirection,List<IfcLengthMeasure> offsetValues):base(layerThickness)
		{

			OffsetDirection = offsetDirection;
			OffsetValues = offsetValues;

		}
		/// <summary>
		/// Construct a IfcMaterialLayerWithOffsets with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialLayerWithOffsets(IfcMaterial material,IfcNonNegativeLengthMeasure layerThickness,IfcLogical isVentilated,IfcLabel name,IfcText description,IfcLabel category,IfcInteger priority,IfcLayerSetDirectionEnum offsetDirection,List<IfcLengthMeasure> offsetValues):base(material,layerThickness,isVentilated,name,description,category,priority)
		{

			OffsetDirection = offsetDirection;
			OffsetValues = offsetValues;

		}
		public static new IfcMaterialLayerWithOffsets FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialLayerWithOffsets>(json); }

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
			parameters.Add(OffsetDirection.ToStepValue());
			parameters.Add(OffsetValues != null ? OffsetValues.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
