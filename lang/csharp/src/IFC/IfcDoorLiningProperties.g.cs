

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorliningproperties.htm"/>
	/// </summary>
	public  partial class IfcDoorLiningProperties : IfcPreDefinedPropertySet
	{
		public IfcPositiveLengthMeasure LiningDepth{get;set;} // optional
		public IfcNonNegativeLengthMeasure LiningThickness{get;set;} // optional
		public IfcPositiveLengthMeasure ThresholdDepth{get;set;} // optional
		public IfcNonNegativeLengthMeasure ThresholdThickness{get;set;} // optional
		public IfcNonNegativeLengthMeasure TransomThickness{get;set;} // optional
		public IfcLengthMeasure TransomOffset{get;set;} // optional
		public IfcLengthMeasure LiningOffset{get;set;} // optional
		public IfcLengthMeasure ThresholdOffset{get;set;} // optional
		public IfcPositiveLengthMeasure CasingThickness{get;set;} // optional
		public IfcPositiveLengthMeasure CasingDepth{get;set;} // optional
		public IfcShapeAspect ShapeAspectStyle{get;set;} // optional
		public IfcLengthMeasure LiningToPanelOffsetX{get;set;} // optional
		public IfcLengthMeasure LiningToPanelOffsetY{get;set;} // optional


		/// <summary>
		/// Construct a IfcDoorLiningProperties with all required attributes.
		/// </summary>
		public IfcDoorLiningProperties(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcDoorLiningProperties with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDoorLiningProperties(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcPositiveLengthMeasure liningDepth,IfcNonNegativeLengthMeasure liningThickness,IfcPositiveLengthMeasure thresholdDepth,IfcNonNegativeLengthMeasure thresholdThickness,IfcNonNegativeLengthMeasure transomThickness,IfcLengthMeasure transomOffset,IfcLengthMeasure liningOffset,IfcLengthMeasure thresholdOffset,IfcPositiveLengthMeasure casingThickness,IfcPositiveLengthMeasure casingDepth,IfcShapeAspect shapeAspectStyle,IfcLengthMeasure liningToPanelOffsetX,IfcLengthMeasure liningToPanelOffsetY):base(globalId,ownerHistory,name,description)
		{

			LiningDepth = liningDepth;
			LiningThickness = liningThickness;
			ThresholdDepth = thresholdDepth;
			ThresholdThickness = thresholdThickness;
			TransomThickness = transomThickness;
			TransomOffset = transomOffset;
			LiningOffset = liningOffset;
			ThresholdOffset = thresholdOffset;
			CasingThickness = casingThickness;
			CasingDepth = casingDepth;
			ShapeAspectStyle = shapeAspectStyle;
			LiningToPanelOffsetX = liningToPanelOffsetX;
			LiningToPanelOffsetY = liningToPanelOffsetY;

		}
		public static new IfcDoorLiningProperties FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDoorLiningProperties>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(LiningDepth != null ? LiningDepth.ToStepValue() : "$");
			parameters.Add(LiningThickness != null ? LiningThickness.ToStepValue() : "$");
			parameters.Add(ThresholdDepth != null ? ThresholdDepth.ToStepValue() : "$");
			parameters.Add(ThresholdThickness != null ? ThresholdThickness.ToStepValue() : "$");
			parameters.Add(TransomThickness != null ? TransomThickness.ToStepValue() : "$");
			parameters.Add(TransomOffset != null ? TransomOffset.ToStepValue() : "$");
			parameters.Add(LiningOffset != null ? LiningOffset.ToStepValue() : "$");
			parameters.Add(ThresholdOffset != null ? ThresholdOffset.ToStepValue() : "$");
			parameters.Add(CasingThickness != null ? CasingThickness.ToStepValue() : "$");
			parameters.Add(CasingDepth != null ? CasingDepth.ToStepValue() : "$");
			parameters.Add(ShapeAspectStyle != null ? ShapeAspectStyle.ToStepValue() : "$");
			parameters.Add(LiningToPanelOffsetX != null ? LiningToPanelOffsetX.ToStepValue() : "$");
			parameters.Add(LiningToPanelOffsetY != null ? LiningToPanelOffsetY.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
