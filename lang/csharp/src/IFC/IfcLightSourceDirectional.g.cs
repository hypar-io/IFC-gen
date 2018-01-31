

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcedirectional.htm"/>
	/// </summary>
	public  partial class IfcLightSourceDirectional : IfcLightSource
	{
		public IfcDirection Orientation{get;set;} 


		/// <summary>
		/// Construct a IfcLightSourceDirectional with all required attributes.
		/// </summary>
		public IfcLightSourceDirectional(IfcColourRgb lightColour,IfcDirection orientation):base(lightColour)
		{

			Orientation = orientation;

		}
		/// <summary>
		/// Construct a IfcLightSourceDirectional with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcLightSourceDirectional(IfcLabel name,IfcColourRgb lightColour,IfcNormalisedRatioMeasure ambientIntensity,IfcNormalisedRatioMeasure intensity,IfcDirection orientation):base(name,lightColour,ambientIntensity,intensity)
		{

			Orientation = orientation;

		}
		public static new IfcLightSourceDirectional FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLightSourceDirectional>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(LightColour != null ? LightColour.ToStepValue() : "$");
			parameters.Add(AmbientIntensity != null ? AmbientIntensity.ToStepValue() : "$");
			parameters.Add(Intensity != null ? Intensity.ToStepValue() : "$");
			parameters.Add(Orientation != null ? Orientation.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
