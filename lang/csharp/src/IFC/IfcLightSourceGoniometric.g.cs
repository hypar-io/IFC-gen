

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcegoniometric.htm"/>
	/// </summary>
	public  partial class IfcLightSourceGoniometric : IfcLightSource
	{
		public IfcAxis2Placement3D Position{get;set;} 
		public IfcColourRgb ColourAppearance{get;set;} // optional
		public IfcThermodynamicTemperatureMeasure ColourTemperature{get;set;} 
		public IfcLuminousFluxMeasure LuminousFlux{get;set;} 
		public IfcLightEmissionSourceEnum LightEmissionSource{get;set;} 
		public IfcLightDistributionDataSourceSelect LightDistributionDataSource{get;set;} 


		/// <summary>
		/// Construct a IfcLightSourceGoniometric with all required attributes.
		/// </summary>
		public IfcLightSourceGoniometric(IfcColourRgb lightColour,IfcAxis2Placement3D position,IfcThermodynamicTemperatureMeasure colourTemperature,IfcLuminousFluxMeasure luminousFlux,IfcLightEmissionSourceEnum lightEmissionSource,IfcLightDistributionDataSourceSelect lightDistributionDataSource):base(lightColour)
		{

			Position = position;
			ColourTemperature = colourTemperature;
			LuminousFlux = luminousFlux;
			LightEmissionSource = lightEmissionSource;
			LightDistributionDataSource = lightDistributionDataSource;

		}
		/// <summary>
		/// Construct a IfcLightSourceGoniometric with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcLightSourceGoniometric(IfcLabel name,IfcColourRgb lightColour,IfcNormalisedRatioMeasure ambientIntensity,IfcNormalisedRatioMeasure intensity,IfcAxis2Placement3D position,IfcColourRgb colourAppearance,IfcThermodynamicTemperatureMeasure colourTemperature,IfcLuminousFluxMeasure luminousFlux,IfcLightEmissionSourceEnum lightEmissionSource,IfcLightDistributionDataSourceSelect lightDistributionDataSource):base(name,lightColour,ambientIntensity,intensity)
		{

			Position = position;
			ColourAppearance = colourAppearance;
			ColourTemperature = colourTemperature;
			LuminousFlux = luminousFlux;
			LightEmissionSource = lightEmissionSource;
			LightDistributionDataSource = lightDistributionDataSource;

		}
		public static new IfcLightSourceGoniometric FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLightSourceGoniometric>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(LightColour != null ? LightColour.ToStepValue() : "$");
			parameters.Add(AmbientIntensity != null ? AmbientIntensity.ToStepValue() : "$");
			parameters.Add(Intensity != null ? Intensity.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(ColourAppearance != null ? ColourAppearance.ToStepValue() : "$");
			parameters.Add(ColourTemperature != null ? ColourTemperature.ToStepValue() : "$");
			parameters.Add(LuminousFlux != null ? LuminousFlux.ToStepValue() : "$");
			parameters.Add(LightEmissionSource.ToStepValue());
			parameters.Add(LightDistributionDataSource != null ? LightDistributionDataSource.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
