

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclshapeprofiledef.htm"/>
	/// </summary>
	public  partial class IfcLShapeProfileDef : IfcParameterizedProfileDef
	{
		public IfcPositiveLengthMeasure Depth{get;set;} 
		public IfcPositiveLengthMeasure Width{get;set;} // optional
		public IfcPositiveLengthMeasure Thickness{get;set;} 
		public IfcNonNegativeLengthMeasure FilletRadius{get;set;} // optional
		public IfcNonNegativeLengthMeasure EdgeRadius{get;set;} // optional
		public IfcPlaneAngleMeasure LegSlope{get;set;} // optional


		/// <summary>
		/// Construct a IfcLShapeProfileDef with all required attributes.
		/// </summary>
		public IfcLShapeProfileDef(IfcProfileTypeEnum profileType,IfcPositiveLengthMeasure depth,IfcPositiveLengthMeasure thickness):base(profileType)
		{

			Depth = depth;
			Thickness = thickness;

		}
		/// <summary>
		/// Construct a IfcLShapeProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcLShapeProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcAxis2Placement2D position,IfcPositiveLengthMeasure depth,IfcPositiveLengthMeasure width,IfcPositiveLengthMeasure thickness,IfcNonNegativeLengthMeasure filletRadius,IfcNonNegativeLengthMeasure edgeRadius,IfcPlaneAngleMeasure legSlope):base(profileType,profileName,position)
		{

			Depth = depth;
			Width = width;
			Thickness = thickness;
			FilletRadius = filletRadius;
			EdgeRadius = edgeRadius;
			LegSlope = legSlope;

		}
		public static new IfcLShapeProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLShapeProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(Depth != null ? Depth.ToStepValue() : "$");
			parameters.Add(Width != null ? Width.ToStepValue() : "$");
			parameters.Add(Thickness != null ? Thickness.ToStepValue() : "$");
			parameters.Add(FilletRadius != null ? FilletRadius.ToStepValue() : "$");
			parameters.Add(EdgeRadius != null ? EdgeRadius.ToStepValue() : "$");
			parameters.Add(LegSlope != null ? LegSlope.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
