

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowliningproperties.htm"/>
	/// </summary>
	public  partial class IfcWindowLiningProperties : IfcPreDefinedPropertySet
	{
		public IfcPositiveLengthMeasure LiningDepth{get;set;} // optional
		public IfcNonNegativeLengthMeasure LiningThickness{get;set;} // optional
		public IfcNonNegativeLengthMeasure TransomThickness{get;set;} // optional
		public IfcNonNegativeLengthMeasure MullionThickness{get;set;} // optional
		public IfcNormalisedRatioMeasure FirstTransomOffset{get;set;} // optional
		public IfcNormalisedRatioMeasure SecondTransomOffset{get;set;} // optional
		public IfcNormalisedRatioMeasure FirstMullionOffset{get;set;} // optional
		public IfcNormalisedRatioMeasure SecondMullionOffset{get;set;} // optional
		public IfcShapeAspect ShapeAspectStyle{get;set;} // optional
		public IfcLengthMeasure LiningOffset{get;set;} // optional
		public IfcLengthMeasure LiningToPanelOffsetX{get;set;} // optional
		public IfcLengthMeasure LiningToPanelOffsetY{get;set;} // optional


		/// <summary>
		/// Construct a IfcWindowLiningProperties with all required attributes.
		/// </summary>
		public IfcWindowLiningProperties(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcWindowLiningProperties with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcWindowLiningProperties(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcPositiveLengthMeasure liningDepth,IfcNonNegativeLengthMeasure liningThickness,IfcNonNegativeLengthMeasure transomThickness,IfcNonNegativeLengthMeasure mullionThickness,IfcNormalisedRatioMeasure firstTransomOffset,IfcNormalisedRatioMeasure secondTransomOffset,IfcNormalisedRatioMeasure firstMullionOffset,IfcNormalisedRatioMeasure secondMullionOffset,IfcShapeAspect shapeAspectStyle,IfcLengthMeasure liningOffset,IfcLengthMeasure liningToPanelOffsetX,IfcLengthMeasure liningToPanelOffsetY):base(globalId,ownerHistory,name,description)
		{

			LiningDepth = liningDepth;
			LiningThickness = liningThickness;
			TransomThickness = transomThickness;
			MullionThickness = mullionThickness;
			FirstTransomOffset = firstTransomOffset;
			SecondTransomOffset = secondTransomOffset;
			FirstMullionOffset = firstMullionOffset;
			SecondMullionOffset = secondMullionOffset;
			ShapeAspectStyle = shapeAspectStyle;
			LiningOffset = liningOffset;
			LiningToPanelOffsetX = liningToPanelOffsetX;
			LiningToPanelOffsetY = liningToPanelOffsetY;

		}
		public static new IfcWindowLiningProperties FromJSON(string json){ return JsonConvert.DeserializeObject<IfcWindowLiningProperties>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(LiningDepth != null ? LiningDepth.ToStepValue() : "$");
			parameters.Add(LiningThickness != null ? LiningThickness.ToStepValue() : "$");
			parameters.Add(TransomThickness != null ? TransomThickness.ToStepValue() : "$");
			parameters.Add(MullionThickness != null ? MullionThickness.ToStepValue() : "$");
			parameters.Add(FirstTransomOffset != null ? FirstTransomOffset.ToStepValue() : "$");
			parameters.Add(SecondTransomOffset != null ? SecondTransomOffset.ToStepValue() : "$");
			parameters.Add(FirstMullionOffset != null ? FirstMullionOffset.ToStepValue() : "$");
			parameters.Add(SecondMullionOffset != null ? SecondMullionOffset.ToStepValue() : "$");
			parameters.Add(ShapeAspectStyle != null ? ShapeAspectStyle.ToStepValue() : "$");
			parameters.Add(LiningOffset != null ? LiningOffset.ToStepValue() : "$");
			parameters.Add(LiningToPanelOffsetX != null ? LiningToPanelOffsetX.ToStepValue() : "$");
			parameters.Add(LiningToPanelOffsetY != null ? LiningToPanelOffsetY.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
