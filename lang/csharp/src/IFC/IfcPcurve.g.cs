

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpcurve.htm"/>
	/// </summary>
	public  partial class IfcPcurve : IfcCurve
	{
		public IfcSurface BasisSurface{get;set;} 
		public IfcCurve ReferenceCurve{get;set;} 


		/// <summary>
		/// Construct a IfcPcurve with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPcurve(IfcSurface basisSurface,IfcCurve referenceCurve):base()
		{

			BasisSurface = basisSurface;
			ReferenceCurve = referenceCurve;

		}
		public static new IfcPcurve FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPcurve>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(BasisSurface != null ? BasisSurface.ToStepValue() : "$");
			parameters.Add(ReferenceCurve != null ? ReferenceCurve.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
