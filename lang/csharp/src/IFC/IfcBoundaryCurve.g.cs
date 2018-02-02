

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarycurve.htm"/>
	/// </summary>
	public  partial class IfcBoundaryCurve : IfcCompositeCurveOnSurface
	{


		/// <summary>
		/// Construct a IfcBoundaryCurve with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBoundaryCurve(List<IfcCompositeCurveSegment> segments,IfcLogical selfIntersect):base(segments,selfIntersect)
		{


		}
		public static new IfcBoundaryCurve FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBoundaryCurve>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Segments != null ? Segments.ToStepValue() : "$");
			parameters.Add(SelfIntersect != null ? SelfIntersect.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
