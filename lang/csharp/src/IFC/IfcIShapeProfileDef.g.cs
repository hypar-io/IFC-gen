

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcishapeprofiledef.htm"/>
	/// </summary>
	public  partial class IfcIShapeProfileDef : IfcParameterizedProfileDef
	{
		public IfcPositiveLengthMeasure OverallWidth{get;set;} 
		public IfcPositiveLengthMeasure OverallDepth{get;set;} 
		public IfcPositiveLengthMeasure WebThickness{get;set;} 
		public IfcPositiveLengthMeasure FlangeThickness{get;set;} 
		public IfcNonNegativeLengthMeasure FilletRadius{get;set;} // optional
		public IfcNonNegativeLengthMeasure FlangeEdgeRadius{get;set;} // optional
		public IfcPlaneAngleMeasure FlangeSlope{get;set;} // optional


		/// <summary>
		/// Construct a IfcIShapeProfileDef with all required attributes.
		/// </summary>
		public IfcIShapeProfileDef(IfcProfileTypeEnum profileType,IfcPositiveLengthMeasure overallWidth,IfcPositiveLengthMeasure overallDepth,IfcPositiveLengthMeasure webThickness,IfcPositiveLengthMeasure flangeThickness):base(profileType)
		{

			OverallWidth = overallWidth;
			OverallDepth = overallDepth;
			WebThickness = webThickness;
			FlangeThickness = flangeThickness;

		}
		/// <summary>
		/// Construct a IfcIShapeProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcIShapeProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcAxis2Placement2D position,IfcPositiveLengthMeasure overallWidth,IfcPositiveLengthMeasure overallDepth,IfcPositiveLengthMeasure webThickness,IfcPositiveLengthMeasure flangeThickness,IfcNonNegativeLengthMeasure filletRadius,IfcNonNegativeLengthMeasure flangeEdgeRadius,IfcPlaneAngleMeasure flangeSlope):base(profileType,profileName,position)
		{

			OverallWidth = overallWidth;
			OverallDepth = overallDepth;
			WebThickness = webThickness;
			FlangeThickness = flangeThickness;
			FilletRadius = filletRadius;
			FlangeEdgeRadius = flangeEdgeRadius;
			FlangeSlope = flangeSlope;

		}
		public static new IfcIShapeProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcIShapeProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(OverallWidth != null ? OverallWidth.ToStepValue() : "$");
			parameters.Add(OverallDepth != null ? OverallDepth.ToStepValue() : "$");
			parameters.Add(WebThickness != null ? WebThickness.ToStepValue() : "$");
			parameters.Add(FlangeThickness != null ? FlangeThickness.ToStepValue() : "$");
			parameters.Add(FilletRadius != null ? FilletRadius.ToStepValue() : "$");
			parameters.Add(FlangeEdgeRadius != null ? FlangeEdgeRadius.ToStepValue() : "$");
			parameters.Add(FlangeSlope != null ? FlangeSlope.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
