

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositecurve.htm"/>
	/// </summary>
	public  partial class IfcCompositeCurve : IfcBoundedCurve
	{
		public List<IfcCompositeCurveSegment> Segments{get;set;} 
		public IfcLogical SelfIntersect{get;set;} 

        [JsonIgnore]
        public IfcInteger NSegments{get{throw new NotImplementedException($"Derived property logic has been implemented for NSegments.");}} // derived

        [JsonIgnore]
        public IfcLogical ClosedCurve{get{throw new NotImplementedException($"Derived property logic has been implemented for ClosedCurve.");}} // derived


		/// <summary>
		/// Construct a IfcCompositeCurve with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCompositeCurve(List<IfcCompositeCurveSegment> segments,IfcLogical selfIntersect):base()
		{

			Segments = segments;
			SelfIntersect = selfIntersect;

		}
		public static new IfcCompositeCurve FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCompositeCurve>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Segments != null ? Segments.ToStepValue() : "$");
			parameters.Add(SelfIntersect != null ? SelfIntersect.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
