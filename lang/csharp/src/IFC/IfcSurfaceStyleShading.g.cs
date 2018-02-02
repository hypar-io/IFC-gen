

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestyleshading.htm"/>
	/// </summary>
	public  partial class IfcSurfaceStyleShading : IfcPresentationItem
	{
		public IfcColourRgb SurfaceColour{get;set;} 
		public IfcNormalisedRatioMeasure Transparency{get;set;} // optional


		/// <summary>
		/// Construct a IfcSurfaceStyleShading with all required attributes.
		/// </summary>
		public IfcSurfaceStyleShading(IfcColourRgb surfaceColour):base()
		{

			SurfaceColour = surfaceColour;

		}
		/// <summary>
		/// Construct a IfcSurfaceStyleShading with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSurfaceStyleShading(IfcColourRgb surfaceColour,IfcNormalisedRatioMeasure transparency):base()
		{

			SurfaceColour = surfaceColour;
			Transparency = transparency;

		}
		public static new IfcSurfaceStyleShading FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSurfaceStyleShading>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SurfaceColour != null ? SurfaceColour.ToStepValue() : "$");
			parameters.Add(Transparency != null ? Transparency.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
