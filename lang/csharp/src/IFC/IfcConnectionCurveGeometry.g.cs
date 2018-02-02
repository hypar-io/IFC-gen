

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectioncurvegeometry.htm"/>
	/// </summary>
	public  partial class IfcConnectionCurveGeometry : IfcConnectionGeometry
	{
		public IfcCurveOrEdgeCurve CurveOnRelatingElement{get;set;} 
		public IfcCurveOrEdgeCurve CurveOnRelatedElement{get;set;} // optional


		/// <summary>
		/// Construct a IfcConnectionCurveGeometry with all required attributes.
		/// </summary>
		public IfcConnectionCurveGeometry(IfcCurveOrEdgeCurve curveOnRelatingElement):base()
		{

			CurveOnRelatingElement = curveOnRelatingElement;

		}
		/// <summary>
		/// Construct a IfcConnectionCurveGeometry with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcConnectionCurveGeometry(IfcCurveOrEdgeCurve curveOnRelatingElement,IfcCurveOrEdgeCurve curveOnRelatedElement):base()
		{

			CurveOnRelatingElement = curveOnRelatingElement;
			CurveOnRelatedElement = curveOnRelatedElement;

		}
		public static new IfcConnectionCurveGeometry FromJSON(string json){ return JsonConvert.DeserializeObject<IfcConnectionCurveGeometry>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(CurveOnRelatingElement != null ? CurveOnRelatingElement.ToStepValue() : "$");
			parameters.Add(CurveOnRelatedElement != null ? CurveOnRelatedElement.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
