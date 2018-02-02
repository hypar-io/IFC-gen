

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcannotationfillarea.htm"/>
	/// </summary>
	public  partial class IfcAnnotationFillArea : IfcGeometricRepresentationItem
	{
		public IfcCurve OuterBoundary{get;set;} 
		public List<IfcCurve> InnerBoundaries{get;set;} // optional


		/// <summary>
		/// Construct a IfcAnnotationFillArea with all required attributes.
		/// </summary>
		public IfcAnnotationFillArea(IfcCurve outerBoundary):base()
		{
			InnerBoundaries = new List<IfcCurve>();

			OuterBoundary = outerBoundary;

		}
		/// <summary>
		/// Construct a IfcAnnotationFillArea with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcAnnotationFillArea(IfcCurve outerBoundary,List<IfcCurve> innerBoundaries):base()
		{

			OuterBoundary = outerBoundary;
			InnerBoundaries = innerBoundaries;

		}
		public static new IfcAnnotationFillArea FromJSON(string json){ return JsonConvert.DeserializeObject<IfcAnnotationFillArea>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(OuterBoundary != null ? OuterBoundary.ToStepValue() : "$");
			parameters.Add(InnerBoundaries != null ? InnerBoundaries.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
