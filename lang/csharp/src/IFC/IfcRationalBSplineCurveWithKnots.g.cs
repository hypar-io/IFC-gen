

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrationalbsplinecurvewithknots.htm"/>
	/// </summary>
	public  partial class IfcRationalBSplineCurveWithKnots : IfcBSplineCurveWithKnots
	{
		public List<IfcReal> WeightsData{get;set;} 

        [JsonIgnore]
        public List<IfcReal> Weights{get{throw new NotImplementedException($"Derived property logic has been implemented for Weights.");}} // derived


		/// <summary>
		/// Construct a IfcRationalBSplineCurveWithKnots with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRationalBSplineCurveWithKnots(IfcInteger degree,List<IfcCartesianPoint> controlPointsList,IfcBSplineCurveForm curveForm,IfcLogical closedCurve,IfcLogical selfIntersect,List<IfcInteger> knotMultiplicities,List<IfcParameterValue> knots,IfcKnotType knotSpec,List<IfcReal> weightsData):base(degree,controlPointsList,curveForm,closedCurve,selfIntersect,knotMultiplicities,knots,knotSpec)
		{

			WeightsData = weightsData;

		}
		public static new IfcRationalBSplineCurveWithKnots FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRationalBSplineCurveWithKnots>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Degree != null ? Degree.ToStepValue() : "$");
			parameters.Add(ControlPointsList != null ? ControlPointsList.ToStepValue() : "$");
			parameters.Add(CurveForm != null ? CurveForm.ToStepValue() : "$");
			parameters.Add(ClosedCurve != null ? ClosedCurve.ToStepValue() : "$");
			parameters.Add(SelfIntersect != null ? SelfIntersect.ToStepValue() : "$");
			parameters.Add(KnotMultiplicities != null ? KnotMultiplicities.ToStepValue() : "$");
			parameters.Add(Knots != null ? Knots.ToStepValue() : "$");
			parameters.Add(KnotSpec != null ? KnotSpec.ToStepValue() : "$");
			parameters.Add(WeightsData != null ? WeightsData.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
