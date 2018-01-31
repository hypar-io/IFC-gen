

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylelighting.htm"/>
	/// </summary>
	public  partial class IfcSurfaceStyleLighting : IfcPresentationItem
	{
		public IfcColourRgb DiffuseTransmissionColour{get;set;} 
		public IfcColourRgb DiffuseReflectionColour{get;set;} 
		public IfcColourRgb TransmissionColour{get;set;} 
		public IfcColourRgb ReflectanceColour{get;set;} 


		/// <summary>
		/// Construct a IfcSurfaceStyleLighting with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSurfaceStyleLighting(IfcColourRgb diffuseTransmissionColour,IfcColourRgb diffuseReflectionColour,IfcColourRgb transmissionColour,IfcColourRgb reflectanceColour):base()
		{

			DiffuseTransmissionColour = diffuseTransmissionColour;
			DiffuseReflectionColour = diffuseReflectionColour;
			TransmissionColour = transmissionColour;
			ReflectanceColour = reflectanceColour;

		}
		public static new IfcSurfaceStyleLighting FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSurfaceStyleLighting>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(DiffuseTransmissionColour != null ? DiffuseTransmissionColour.ToStepValue() : "$");
			parameters.Add(DiffuseReflectionColour != null ? DiffuseReflectionColour.ToStepValue() : "$");
			parameters.Add(TransmissionColour != null ? TransmissionColour.ToStepValue() : "$");
			parameters.Add(ReflectanceColour != null ? ReflectanceColour.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
