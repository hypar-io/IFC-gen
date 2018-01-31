

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylerendering.htm"/>
	/// </summary>
	public  partial class IfcSurfaceStyleRendering : IfcSurfaceStyleShading
	{
		public IfcColourOrFactor DiffuseColour{get;set;} // optional
		public IfcColourOrFactor TransmissionColour{get;set;} // optional
		public IfcColourOrFactor DiffuseTransmissionColour{get;set;} // optional
		public IfcColourOrFactor ReflectionColour{get;set;} // optional
		public IfcColourOrFactor SpecularColour{get;set;} // optional
		public IfcSpecularHighlightSelect SpecularHighlight{get;set;} // optional
		public IfcReflectanceMethodEnum ReflectanceMethod{get;set;} 


		/// <summary>
		/// Construct a IfcSurfaceStyleRendering with all required attributes.
		/// </summary>
		public IfcSurfaceStyleRendering(IfcColourRgb surfaceColour,IfcReflectanceMethodEnum reflectanceMethod):base(surfaceColour)
		{

			ReflectanceMethod = reflectanceMethod;

		}
		/// <summary>
		/// Construct a IfcSurfaceStyleRendering with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSurfaceStyleRendering(IfcColourRgb surfaceColour,IfcNormalisedRatioMeasure transparency,IfcColourOrFactor diffuseColour,IfcColourOrFactor transmissionColour,IfcColourOrFactor diffuseTransmissionColour,IfcColourOrFactor reflectionColour,IfcColourOrFactor specularColour,IfcSpecularHighlightSelect specularHighlight,IfcReflectanceMethodEnum reflectanceMethod):base(surfaceColour,transparency)
		{

			DiffuseColour = diffuseColour;
			TransmissionColour = transmissionColour;
			DiffuseTransmissionColour = diffuseTransmissionColour;
			ReflectionColour = reflectionColour;
			SpecularColour = specularColour;
			SpecularHighlight = specularHighlight;
			ReflectanceMethod = reflectanceMethod;

		}
		public static new IfcSurfaceStyleRendering FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSurfaceStyleRendering>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SurfaceColour != null ? SurfaceColour.ToStepValue() : "$");
			parameters.Add(Transparency != null ? Transparency.ToStepValue() : "$");
			parameters.Add(DiffuseColour != null ? DiffuseColour.ToStepValue() : "$");
			parameters.Add(TransmissionColour != null ? TransmissionColour.ToStepValue() : "$");
			parameters.Add(DiffuseTransmissionColour != null ? DiffuseTransmissionColour.ToStepValue() : "$");
			parameters.Add(ReflectionColour != null ? ReflectionColour.ToStepValue() : "$");
			parameters.Add(SpecularColour != null ? SpecularColour.ToStepValue() : "$");
			parameters.Add(SpecularHighlight != null ? SpecularHighlight.ToStepValue() : "$");
			parameters.Add(ReflectanceMethod.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
