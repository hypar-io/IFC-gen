

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylerefraction.htm"/>
	/// </summary>
	public  partial class IfcSurfaceStyleRefraction : IfcPresentationItem
	{
		public IfcReal RefractionIndex{get;set;} // optional
		public IfcReal DispersionFactor{get;set;} // optional


		/// <summary>
		/// Construct a IfcSurfaceStyleRefraction with all required attributes.
		/// </summary>
		public IfcSurfaceStyleRefraction():base()
		{


		}
		/// <summary>
		/// Construct a IfcSurfaceStyleRefraction with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSurfaceStyleRefraction(IfcReal refractionIndex,IfcReal dispersionFactor):base()
		{

			RefractionIndex = refractionIndex;
			DispersionFactor = dispersionFactor;

		}
		public static new IfcSurfaceStyleRefraction FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSurfaceStyleRefraction>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(RefractionIndex != null ? RefractionIndex.ToStepValue() : "$");
			parameters.Add(DispersionFactor != null ? DispersionFactor.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
