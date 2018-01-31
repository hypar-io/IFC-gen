

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionsurfacegeometry.htm"/>
	/// </summary>
	public  partial class IfcConnectionSurfaceGeometry : IfcConnectionGeometry
	{
		public IfcSurfaceOrFaceSurface SurfaceOnRelatingElement{get;set;} 
		public IfcSurfaceOrFaceSurface SurfaceOnRelatedElement{get;set;} // optional


		/// <summary>
		/// Construct a IfcConnectionSurfaceGeometry with all required attributes.
		/// </summary>
		public IfcConnectionSurfaceGeometry(IfcSurfaceOrFaceSurface surfaceOnRelatingElement):base()
		{

			SurfaceOnRelatingElement = surfaceOnRelatingElement;

		}
		/// <summary>
		/// Construct a IfcConnectionSurfaceGeometry with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcConnectionSurfaceGeometry(IfcSurfaceOrFaceSurface surfaceOnRelatingElement,IfcSurfaceOrFaceSurface surfaceOnRelatedElement):base()
		{

			SurfaceOnRelatingElement = surfaceOnRelatingElement;
			SurfaceOnRelatedElement = surfaceOnRelatedElement;

		}
		public static new IfcConnectionSurfaceGeometry FromJSON(string json){ return JsonConvert.DeserializeObject<IfcConnectionSurfaceGeometry>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SurfaceOnRelatingElement != null ? SurfaceOnRelatingElement.ToStepValue() : "$");
			parameters.Add(SurfaceOnRelatedElement != null ? SurfaceOnRelatedElement.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
