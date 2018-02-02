

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositecurveonsurface.htm"/>
	/// </summary>
	public  partial class IfcCompositeCurveOnSurface : IfcCompositeCurve
	{

        [JsonIgnore]
        public List<IfcSurface> BasisSurface{get{throw new NotImplementedException($"Derived property logic has been implemented for BasisSurface.");}} // derived


		/// <summary>
		/// Construct a IfcCompositeCurveOnSurface with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCompositeCurveOnSurface(List<IfcCompositeCurveSegment> segments,IfcLogical selfIntersect):base(segments,selfIntersect)
		{


		}
		public static new IfcCompositeCurveOnSurface FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCompositeCurveOnSurface>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Segments != null ? Segments.ToStepValue() : "$");
			parameters.Add(SelfIntersect != null ? SelfIntersect.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
