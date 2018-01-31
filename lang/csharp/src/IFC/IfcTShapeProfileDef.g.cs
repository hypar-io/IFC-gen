

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctshapeprofiledef.htm"/>
	/// </summary>
	public  partial class IfcTShapeProfileDef : IfcParameterizedProfileDef
	{
		public IfcPositiveLengthMeasure Depth{get;set;} 
		public IfcPositiveLengthMeasure FlangeWidth{get;set;} 
		public IfcPositiveLengthMeasure WebThickness{get;set;} 
		public IfcPositiveLengthMeasure FlangeThickness{get;set;} 
		public IfcNonNegativeLengthMeasure FilletRadius{get;set;} // optional
		public IfcNonNegativeLengthMeasure FlangeEdgeRadius{get;set;} // optional
		public IfcNonNegativeLengthMeasure WebEdgeRadius{get;set;} // optional
		public IfcPlaneAngleMeasure WebSlope{get;set;} // optional
		public IfcPlaneAngleMeasure FlangeSlope{get;set;} // optional


		/// <summary>
		/// Construct a IfcTShapeProfileDef with all required attributes.
		/// </summary>
		public IfcTShapeProfileDef(IfcProfileTypeEnum profileType,IfcPositiveLengthMeasure depth,IfcPositiveLengthMeasure flangeWidth,IfcPositiveLengthMeasure webThickness,IfcPositiveLengthMeasure flangeThickness):base(profileType)
		{

			Depth = depth;
			FlangeWidth = flangeWidth;
			WebThickness = webThickness;
			FlangeThickness = flangeThickness;

		}
		/// <summary>
		/// Construct a IfcTShapeProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTShapeProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcAxis2Placement2D position,IfcPositiveLengthMeasure depth,IfcPositiveLengthMeasure flangeWidth,IfcPositiveLengthMeasure webThickness,IfcPositiveLengthMeasure flangeThickness,IfcNonNegativeLengthMeasure filletRadius,IfcNonNegativeLengthMeasure flangeEdgeRadius,IfcNonNegativeLengthMeasure webEdgeRadius,IfcPlaneAngleMeasure webSlope,IfcPlaneAngleMeasure flangeSlope):base(profileType,profileName,position)
		{

			Depth = depth;
			FlangeWidth = flangeWidth;
			WebThickness = webThickness;
			FlangeThickness = flangeThickness;
			FilletRadius = filletRadius;
			FlangeEdgeRadius = flangeEdgeRadius;
			WebEdgeRadius = webEdgeRadius;
			WebSlope = webSlope;
			FlangeSlope = flangeSlope;

		}
		public static new IfcTShapeProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTShapeProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(Depth != null ? Depth.ToStepValue() : "$");
			parameters.Add(FlangeWidth != null ? FlangeWidth.ToStepValue() : "$");
			parameters.Add(WebThickness != null ? WebThickness.ToStepValue() : "$");
			parameters.Add(FlangeThickness != null ? FlangeThickness.ToStepValue() : "$");
			parameters.Add(FilletRadius != null ? FilletRadius.ToStepValue() : "$");
			parameters.Add(FlangeEdgeRadius != null ? FlangeEdgeRadius.ToStepValue() : "$");
			parameters.Add(WebEdgeRadius != null ? WebEdgeRadius.ToStepValue() : "$");
			parameters.Add(WebSlope != null ? WebSlope.ToStepValue() : "$");
			parameters.Add(FlangeSlope != null ? FlangeSlope.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
