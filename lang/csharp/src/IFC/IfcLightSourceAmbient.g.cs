

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourceambient.htm"/>
	/// </summary>
	public  partial class IfcLightSourceAmbient : IfcLightSource
	{


		/// <summary>
		/// Construct a IfcLightSourceAmbient with all required attributes.
		/// </summary>
		public IfcLightSourceAmbient(IfcColourRgb lightColour):base(lightColour)
		{


		}
		/// <summary>
		/// Construct a IfcLightSourceAmbient with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcLightSourceAmbient(IfcLabel name,IfcColourRgb lightColour,IfcNormalisedRatioMeasure ambientIntensity,IfcNormalisedRatioMeasure intensity):base(name,lightColour,ambientIntensity,intensity)
		{


		}
		public static new IfcLightSourceAmbient FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLightSourceAmbient>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(LightColour != null ? LightColour.ToStepValue() : "$");
			parameters.Add(AmbientIntensity != null ? AmbientIntensity.ToStepValue() : "$");
			parameters.Add(Intensity != null ? Intensity.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
