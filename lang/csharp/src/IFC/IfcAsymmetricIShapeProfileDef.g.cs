

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcasymmetricishapeprofiledef.htm"/>
	/// </summary>
	public  partial class IfcAsymmetricIShapeProfileDef : IfcParameterizedProfileDef
	{
		public IfcPositiveLengthMeasure BottomFlangeWidth{get;set;} 
		public IfcPositiveLengthMeasure OverallDepth{get;set;} 
		public IfcPositiveLengthMeasure WebThickness{get;set;} 
		public IfcPositiveLengthMeasure BottomFlangeThickness{get;set;} 
		public IfcNonNegativeLengthMeasure BottomFlangeFilletRadius{get;set;} // optional
		public IfcPositiveLengthMeasure TopFlangeWidth{get;set;} 
		public IfcPositiveLengthMeasure TopFlangeThickness{get;set;} // optional
		public IfcNonNegativeLengthMeasure TopFlangeFilletRadius{get;set;} // optional
		public IfcNonNegativeLengthMeasure BottomFlangeEdgeRadius{get;set;} // optional
		public IfcPlaneAngleMeasure BottomFlangeSlope{get;set;} // optional
		public IfcNonNegativeLengthMeasure TopFlangeEdgeRadius{get;set;} // optional
		public IfcPlaneAngleMeasure TopFlangeSlope{get;set;} // optional


		/// <summary>
		/// Construct a IfcAsymmetricIShapeProfileDef with all required attributes.
		/// </summary>
		public IfcAsymmetricIShapeProfileDef(IfcProfileTypeEnum profileType,IfcPositiveLengthMeasure bottomFlangeWidth,IfcPositiveLengthMeasure overallDepth,IfcPositiveLengthMeasure webThickness,IfcPositiveLengthMeasure bottomFlangeThickness,IfcPositiveLengthMeasure topFlangeWidth):base(profileType)
		{

			BottomFlangeWidth = bottomFlangeWidth;
			OverallDepth = overallDepth;
			WebThickness = webThickness;
			BottomFlangeThickness = bottomFlangeThickness;
			TopFlangeWidth = topFlangeWidth;

		}
		/// <summary>
		/// Construct a IfcAsymmetricIShapeProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcAsymmetricIShapeProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcAxis2Placement2D position,IfcPositiveLengthMeasure bottomFlangeWidth,IfcPositiveLengthMeasure overallDepth,IfcPositiveLengthMeasure webThickness,IfcPositiveLengthMeasure bottomFlangeThickness,IfcNonNegativeLengthMeasure bottomFlangeFilletRadius,IfcPositiveLengthMeasure topFlangeWidth,IfcPositiveLengthMeasure topFlangeThickness,IfcNonNegativeLengthMeasure topFlangeFilletRadius,IfcNonNegativeLengthMeasure bottomFlangeEdgeRadius,IfcPlaneAngleMeasure bottomFlangeSlope,IfcNonNegativeLengthMeasure topFlangeEdgeRadius,IfcPlaneAngleMeasure topFlangeSlope):base(profileType,profileName,position)
		{

			BottomFlangeWidth = bottomFlangeWidth;
			OverallDepth = overallDepth;
			WebThickness = webThickness;
			BottomFlangeThickness = bottomFlangeThickness;
			BottomFlangeFilletRadius = bottomFlangeFilletRadius;
			TopFlangeWidth = topFlangeWidth;
			TopFlangeThickness = topFlangeThickness;
			TopFlangeFilletRadius = topFlangeFilletRadius;
			BottomFlangeEdgeRadius = bottomFlangeEdgeRadius;
			BottomFlangeSlope = bottomFlangeSlope;
			TopFlangeEdgeRadius = topFlangeEdgeRadius;
			TopFlangeSlope = topFlangeSlope;

		}
		public static new IfcAsymmetricIShapeProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcAsymmetricIShapeProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(BottomFlangeWidth != null ? BottomFlangeWidth.ToStepValue() : "$");
			parameters.Add(OverallDepth != null ? OverallDepth.ToStepValue() : "$");
			parameters.Add(WebThickness != null ? WebThickness.ToStepValue() : "$");
			parameters.Add(BottomFlangeThickness != null ? BottomFlangeThickness.ToStepValue() : "$");
			parameters.Add(BottomFlangeFilletRadius != null ? BottomFlangeFilletRadius.ToStepValue() : "$");
			parameters.Add(TopFlangeWidth != null ? TopFlangeWidth.ToStepValue() : "$");
			parameters.Add(TopFlangeThickness != null ? TopFlangeThickness.ToStepValue() : "$");
			parameters.Add(TopFlangeFilletRadius != null ? TopFlangeFilletRadius.ToStepValue() : "$");
			parameters.Add(BottomFlangeEdgeRadius != null ? BottomFlangeEdgeRadius.ToStepValue() : "$");
			parameters.Add(BottomFlangeSlope != null ? BottomFlangeSlope.ToStepValue() : "$");
			parameters.Add(TopFlangeEdgeRadius != null ? TopFlangeEdgeRadius.ToStepValue() : "$");
			parameters.Add(TopFlangeSlope != null ? TopFlangeSlope.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
