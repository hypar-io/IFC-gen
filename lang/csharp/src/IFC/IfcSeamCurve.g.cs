

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcseamcurve.htm"/>
	/// </summary>
	public  partial class IfcSeamCurve : IfcSurfaceCurve
	{


		/// <summary>
		/// Construct a IfcSeamCurve with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSeamCurve(IfcCurve curve3D,List<IfcPcurve> associatedGeometry,IfcPreferredSurfaceCurveRepresentation masterRepresentation):base(curve3D,associatedGeometry,masterRepresentation)
		{


		}
		public static new IfcSeamCurve FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSeamCurve>(json); }

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
