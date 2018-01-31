

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreparametrisedcompositecurvesegment.htm"/>
	/// </summary>
	public  partial class IfcReparametrisedCompositeCurveSegment : IfcCompositeCurveSegment
	{
		public IfcParameterValue ParamLength{get;set;} 


		/// <summary>
		/// Construct a IfcReparametrisedCompositeCurveSegment with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcReparametrisedCompositeCurveSegment(IfcTransitionCode transition,IfcBoolean sameSense,IfcCurve parentCurve,IfcParameterValue paramLength):base(transition,sameSense,parentCurve)
		{

			ParamLength = paramLength;

		}
		public static new IfcReparametrisedCompositeCurveSegment FromJSON(string json){ return JsonConvert.DeserializeObject<IfcReparametrisedCompositeCurveSegment>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Transition != null ? Transition.ToStepValue() : "$");
			parameters.Add(SameSense != null ? SameSense.ToStepValue() : "$");
			parameters.Add(ParentCurve != null ? ParentCurve.ToStepValue() : "$");
			parameters.Add(ParamLength != null ? ParamLength.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
