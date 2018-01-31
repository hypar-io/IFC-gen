

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurveboundedsurface.htm"/>
	/// </summary>
	public  partial class IfcCurveBoundedSurface : IfcBoundedSurface
	{
		public IfcSurface BasisSurface{get;set;} 
		public List<IfcBoundaryCurve> Boundaries{get;set;} 
		public IfcBoolean ImplicitOuter{get;set;} 


		/// <summary>
		/// Construct a IfcCurveBoundedSurface with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCurveBoundedSurface(IfcSurface basisSurface,List<IfcBoundaryCurve> boundaries,IfcBoolean implicitOuter):base()
		{

			BasisSurface = basisSurface;
			Boundaries = boundaries;
			ImplicitOuter = implicitOuter;

		}
		public static new IfcCurveBoundedSurface FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCurveBoundedSurface>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(BasisSurface != null ? BasisSurface.ToStepValue() : "$");
			parameters.Add(Boundaries != null ? Boundaries.ToStepValue() : "$");
			parameters.Add(ImplicitOuter != null ? ImplicitOuter.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
