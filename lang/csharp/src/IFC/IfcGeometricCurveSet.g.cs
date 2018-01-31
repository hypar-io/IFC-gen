

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometriccurveset.htm"/>
	/// </summary>
	public  partial class IfcGeometricCurveSet : IfcGeometricSet
	{


		/// <summary>
		/// Construct a IfcGeometricCurveSet with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcGeometricCurveSet(List<IfcGeometricSetSelect> elements):base(elements)
		{


		}
		public static new IfcGeometricCurveSet FromJSON(string json){ return JsonConvert.DeserializeObject<IfcGeometricCurveSet>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Elements != null ? Elements.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
