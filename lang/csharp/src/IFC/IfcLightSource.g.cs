

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsource.htm"/>
	/// </summary>
	public abstract partial class IfcLightSource : IfcGeometricRepresentationItem
	{
		public IfcLabel Name{get;set;} // optional
		public IfcColourRgb LightColour{get;set;} 
		public IfcNormalisedRatioMeasure AmbientIntensity{get;set;} // optional
		public IfcNormalisedRatioMeasure Intensity{get;set;} // optional


		/// <summary>
		/// Construct a IfcLightSource with all required attributes.
		/// </summary>
		public IfcLightSource(IfcColourRgb lightColour):base()
		{

			LightColour = lightColour;

		}
		/// <summary>
		/// Construct a IfcLightSource with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcLightSource(IfcLabel name,IfcColourRgb lightColour,IfcNormalisedRatioMeasure ambientIntensity,IfcNormalisedRatioMeasure intensity):base()
		{

			Name = name;
			LightColour = lightColour;
			AmbientIntensity = ambientIntensity;
			Intensity = intensity;

		}
		public static new IfcLightSource FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLightSource>(json); }

	}
}
