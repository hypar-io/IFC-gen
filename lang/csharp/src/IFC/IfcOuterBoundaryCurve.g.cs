

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcouterboundarycurve.htm"/>
	/// </summary>
	public  partial class IfcOuterBoundaryCurve : IfcBoundaryCurve
	{


		/// <summary>
		/// Construct a IfcOuterBoundaryCurve with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcOuterBoundaryCurve(List<IfcCompositeCurveSegment> segments,IfcLogical selfIntersect):base(segments,selfIntersect)
		{


		}
		public static new IfcOuterBoundaryCurve FromJSON(string json){ return JsonConvert.DeserializeObject<IfcOuterBoundaryCurve>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Segments != null ? Segments.ToStepValue() : "$");
			parameters.Add(SelfIntersect != null ? SelfIntersect.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
