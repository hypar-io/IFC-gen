

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositecurvesegment.htm"/>
	/// </summary>
	public  partial class IfcCompositeCurveSegment : IfcGeometricRepresentationItem
	{
		public IfcTransitionCode Transition{get;set;} 
		public IfcBoolean SameSense{get;set;} 
		public IfcCurve ParentCurve{get;set;} 

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived
		public List<IfcCompositeCurve> UsingCurves{get;set;} // inverse


		/// <summary>
		/// Construct a IfcCompositeCurveSegment with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCompositeCurveSegment(IfcTransitionCode transition,IfcBoolean sameSense,IfcCurve parentCurve):base()
		{
			UsingCurves = new List<IfcCompositeCurve>();

			Transition = transition;
			SameSense = sameSense;
			ParentCurve = parentCurve;

		}
		public static new IfcCompositeCurveSegment FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCompositeCurveSegment>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Transition != null ? Transition.ToStepValue() : "$");
			parameters.Add(SameSense != null ? SameSense.ToStepValue() : "$");
			parameters.Add(ParentCurve != null ? ParentCurve.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
