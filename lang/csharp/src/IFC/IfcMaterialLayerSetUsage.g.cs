

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayersetusage.htm"/>
	/// </summary>
	public  partial class IfcMaterialLayerSetUsage : IfcMaterialUsageDefinition
	{
		public IfcMaterialLayerSet ForLayerSet{get;set;} 
		public IfcLayerSetDirectionEnum LayerSetDirection{get;set;} 
		public IfcDirectionSenseEnum DirectionSense{get;set;} 
		public IfcLengthMeasure OffsetFromReferenceLine{get;set;} 
		public IfcPositiveLengthMeasure ReferenceExtent{get;set;} // optional


		/// <summary>
		/// Construct a IfcMaterialLayerSetUsage with all required attributes.
		/// </summary>
		public IfcMaterialLayerSetUsage(IfcMaterialLayerSet forLayerSet,IfcLayerSetDirectionEnum layerSetDirection,IfcDirectionSenseEnum directionSense,IfcLengthMeasure offsetFromReferenceLine):base()
		{

			ForLayerSet = forLayerSet;
			LayerSetDirection = layerSetDirection;
			DirectionSense = directionSense;
			OffsetFromReferenceLine = offsetFromReferenceLine;

		}
		/// <summary>
		/// Construct a IfcMaterialLayerSetUsage with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialLayerSetUsage(IfcMaterialLayerSet forLayerSet,IfcLayerSetDirectionEnum layerSetDirection,IfcDirectionSenseEnum directionSense,IfcLengthMeasure offsetFromReferenceLine,IfcPositiveLengthMeasure referenceExtent):base()
		{

			ForLayerSet = forLayerSet;
			LayerSetDirection = layerSetDirection;
			DirectionSense = directionSense;
			OffsetFromReferenceLine = offsetFromReferenceLine;
			ReferenceExtent = referenceExtent;

		}
		public static new IfcMaterialLayerSetUsage FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialLayerSetUsage>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ForLayerSet != null ? ForLayerSet.ToStepValue() : "$");
			parameters.Add(LayerSetDirection.ToStepValue());
			parameters.Add(DirectionSense.ToStepValue());
			parameters.Add(OffsetFromReferenceLine != null ? OffsetFromReferenceLine.ToStepValue() : "$");
			parameters.Add(ReferenceExtent != null ? ReferenceExtent.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
