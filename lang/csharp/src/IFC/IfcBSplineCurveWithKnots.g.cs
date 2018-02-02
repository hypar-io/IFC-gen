

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbsplinecurvewithknots.htm"/>
	/// </summary>
	public  partial class IfcBSplineCurveWithKnots : IfcBSplineCurve
	{
		public List<IfcInteger> KnotMultiplicities{get;set;} 
		public List<IfcParameterValue> Knots{get;set;} 
		public IfcKnotType KnotSpec{get;set;} 

        [JsonIgnore]
        public IfcInteger UpperIndexOnKnots{get{throw new NotImplementedException($"Derived property logic has been implemented for UpperIndexOnKnots.");}} // derived


		/// <summary>
		/// Construct a IfcBSplineCurveWithKnots with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBSplineCurveWithKnots(IfcInteger degree,List<IfcCartesianPoint> controlPointsList,IfcBSplineCurveForm curveForm,IfcLogical closedCurve,IfcLogical selfIntersect,List<IfcInteger> knotMultiplicities,List<IfcParameterValue> knots,IfcKnotType knotSpec):base(degree,controlPointsList,curveForm,closedCurve,selfIntersect)
		{

			KnotMultiplicities = knotMultiplicities;
			Knots = knots;
			KnotSpec = knotSpec;

		}
		public static new IfcBSplineCurveWithKnots FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBSplineCurveWithKnots>(json); }

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

            return string.Join(", ", parameters.ToArray());
        }
	}
}
