

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcintersectioncurve.htm"/>
	/// </summary>
	public  partial class IfcIntersectionCurve : IfcSurfaceCurve
	{


		/// <summary>
		/// Construct a IfcIntersectionCurve with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcIntersectionCurve(IfcCurve curve3D,List<IfcPcurve> associatedGeometry,IfcPreferredSurfaceCurveRepresentation masterRepresentation):base(curve3D,associatedGeometry,masterRepresentation)
		{


		}
		public static new IfcIntersectionCurve FromJSON(string json){ return JsonConvert.DeserializeObject<IfcIntersectionCurve>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Curve3D != null ? Curve3D.ToStepValue() : "$");
			parameters.Add(AssociatedGeometry != null ? AssociatedGeometry.ToStepValue() : "$");
			parameters.Add(MasterRepresentation != null ? MasterRepresentation.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
