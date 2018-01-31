

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacesurface.htm"/>
	/// </summary>
	public  partial class IfcFaceSurface : IfcFace
	{
		public IfcSurface FaceSurface{get;set;} 
		public IfcBoolean SameSense{get;set;} 


		/// <summary>
		/// Construct a IfcFaceSurface with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFaceSurface(List<IfcFaceBound> bounds,IfcSurface faceSurface,IfcBoolean sameSense):base(bounds)
		{

			FaceSurface = faceSurface;
			SameSense = sameSense;

		}
		public static new IfcFaceSurface FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFaceSurface>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Bounds != null ? Bounds.ToStepValue() : "$");
			parameters.Add(FaceSurface != null ? FaceSurface.ToStepValue() : "$");
			parameters.Add(SameSense != null ? SameSense.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
