

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcespot.htm"/>
	/// </summary>
	public  partial class IfcLightSourceSpot : IfcLightSourcePositional
	{
		public IfcDirection Orientation{get;set;} 
		public IfcReal ConcentrationExponent{get;set;} // optional
		public IfcPositivePlaneAngleMeasure SpreadAngle{get;set;} 
		public IfcPositivePlaneAngleMeasure BeamWidthAngle{get;set;} 


		/// <summary>
		/// Construct a IfcLightSourceSpot with all required attributes.
		/// </summary>
		public IfcLightSourceSpot(IfcColourRgb lightColour,IfcCartesianPoint position,IfcPositiveLengthMeasure radius,IfcReal constantAttenuation,IfcReal distanceAttenuation,IfcReal quadricAttenuation,IfcDirection orientation,IfcPositivePlaneAngleMeasure spreadAngle,IfcPositivePlaneAngleMeasure beamWidthAngle):base(lightColour,position,radius,constantAttenuation,distanceAttenuation,quadricAttenuation)
		{

			Orientation = orientation;
			SpreadAngle = spreadAngle;
			BeamWidthAngle = beamWidthAngle;

		}
		/// <summary>
		/// Construct a IfcLightSourceSpot with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcLightSourceSpot(IfcLabel name,IfcColourRgb lightColour,IfcNormalisedRatioMeasure ambientIntensity,IfcNormalisedRatioMeasure intensity,IfcCartesianPoint position,IfcPositiveLengthMeasure radius,IfcReal constantAttenuation,IfcReal distanceAttenuation,IfcReal quadricAttenuation,IfcDirection orientation,IfcReal concentrationExponent,IfcPositivePlaneAngleMeasure spreadAngle,IfcPositivePlaneAngleMeasure beamWidthAngle):base(name,lightColour,ambientIntensity,intensity,position,radius,constantAttenuation,distanceAttenuation,quadricAttenuation)
		{

			Orientation = orientation;
			ConcentrationExponent = concentrationExponent;
			SpreadAngle = spreadAngle;
			BeamWidthAngle = beamWidthAngle;

		}
		public static new IfcLightSourceSpot FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLightSourceSpot>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(LightColour != null ? LightColour.ToStepValue() : "$");
			parameters.Add(AmbientIntensity != null ? AmbientIntensity.ToStepValue() : "$");
			parameters.Add(Intensity != null ? Intensity.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(Radius != null ? Radius.ToStepValue() : "$");
			parameters.Add(ConstantAttenuation != null ? ConstantAttenuation.ToStepValue() : "$");
			parameters.Add(DistanceAttenuation != null ? DistanceAttenuation.ToStepValue() : "$");
			parameters.Add(QuadricAttenuation != null ? QuadricAttenuation.ToStepValue() : "$");
			parameters.Add(Orientation != null ? Orientation.ToStepValue() : "$");
			parameters.Add(ConcentrationExponent != null ? ConcentrationExponent.ToStepValue() : "$");
			parameters.Add(SpreadAngle != null ? SpreadAngle.ToStepValue() : "$");
			parameters.Add(BeamWidthAngle != null ? BeamWidthAngle.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
