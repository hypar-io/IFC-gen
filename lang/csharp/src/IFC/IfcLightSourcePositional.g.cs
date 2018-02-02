

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcepositional.htm"/>
	/// </summary>
	public  partial class IfcLightSourcePositional : IfcLightSource
	{
		public IfcCartesianPoint Position{get;set;} 
		public IfcPositiveLengthMeasure Radius{get;set;} 
		public IfcReal ConstantAttenuation{get;set;} 
		public IfcReal DistanceAttenuation{get;set;} 
		public IfcReal QuadricAttenuation{get;set;} 


		/// <summary>
		/// Construct a IfcLightSourcePositional with all required attributes.
		/// </summary>
		public IfcLightSourcePositional(IfcColourRgb lightColour,IfcCartesianPoint position,IfcPositiveLengthMeasure radius,IfcReal constantAttenuation,IfcReal distanceAttenuation,IfcReal quadricAttenuation):base(lightColour)
		{

			Position = position;
			Radius = radius;
			ConstantAttenuation = constantAttenuation;
			DistanceAttenuation = distanceAttenuation;
			QuadricAttenuation = quadricAttenuation;

		}
		/// <summary>
		/// Construct a IfcLightSourcePositional with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcLightSourcePositional(IfcLabel name,IfcColourRgb lightColour,IfcNormalisedRatioMeasure ambientIntensity,IfcNormalisedRatioMeasure intensity,IfcCartesianPoint position,IfcPositiveLengthMeasure radius,IfcReal constantAttenuation,IfcReal distanceAttenuation,IfcReal quadricAttenuation):base(name,lightColour,ambientIntensity,intensity)
		{

			Position = position;
			Radius = radius;
			ConstantAttenuation = constantAttenuation;
			DistanceAttenuation = distanceAttenuation;
			QuadricAttenuation = quadricAttenuation;

		}
		public static new IfcLightSourcePositional FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLightSourcePositional>(json); }

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

            return string.Join(", ", parameters.ToArray());
        }
	}
}
