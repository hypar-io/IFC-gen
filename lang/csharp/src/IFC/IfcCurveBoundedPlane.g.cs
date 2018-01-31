

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurveboundedplane.htm"/>
	/// </summary>
	public  partial class IfcCurveBoundedPlane : IfcBoundedSurface
	{
		public IfcPlane BasisSurface{get;set;} 
		public IfcCurve OuterBoundary{get;set;} 
		public List<IfcCurve> InnerBoundaries{get;set;} 


		/// <summary>
		/// Construct a IfcCurveBoundedPlane with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCurveBoundedPlane(IfcPlane basisSurface,IfcCurve outerBoundary,List<IfcCurve> innerBoundaries):base()
		{

			BasisSurface = basisSurface;
			OuterBoundary = outerBoundary;
			InnerBoundaries = innerBoundaries;

		}
		public static new IfcCurveBoundedPlane FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCurveBoundedPlane>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(BasisSurface != null ? BasisSurface.ToStepValue() : "$");
			parameters.Add(OuterBoundary != null ? OuterBoundary.ToStepValue() : "$");
			parameters.Add(InnerBoundaries != null ? InnerBoundaries.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
