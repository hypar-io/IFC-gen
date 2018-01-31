

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrationalbsplinesurfacewithknots.htm"/>
	/// </summary>
	public  partial class IfcRationalBSplineSurfaceWithKnots : IfcBSplineSurfaceWithKnots
	{
		public List<List<IfcReal>> WeightsData{get;set;} 

        [JsonIgnore]
        public List<List<IfcReal>> Weights{get{throw new NotImplementedException($"Derived property logic has been implemented for Weights.");}} // derived


		/// <summary>
		/// Construct a IfcRationalBSplineSurfaceWithKnots with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRationalBSplineSurfaceWithKnots(IfcInteger uDegree,IfcInteger vDegree,List<List<IfcCartesianPoint>> controlPointsList,IfcBSplineSurfaceForm surfaceForm,IfcLogical uClosed,IfcLogical vClosed,IfcLogical selfIntersect,List<IfcInteger> uMultiplicities,List<IfcInteger> vMultiplicities,List<IfcParameterValue> uKnots,List<IfcParameterValue> vKnots,IfcKnotType knotSpec,List<List<IfcReal>> weightsData):base(uDegree,vDegree,controlPointsList,surfaceForm,uClosed,vClosed,selfIntersect,uMultiplicities,vMultiplicities,uKnots,vKnots,knotSpec)
		{

			WeightsData = weightsData;

		}
		public static new IfcRationalBSplineSurfaceWithKnots FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRationalBSplineSurfaceWithKnots>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(UDegree != null ? UDegree.ToStepValue() : "$");
			parameters.Add(VDegree != null ? VDegree.ToStepValue() : "$");
			parameters.Add(ControlPointsList != null ? ControlPointsList.ToStepValue() : "$");
			parameters.Add(SurfaceForm != null ? SurfaceForm.ToStepValue() : "$");
			parameters.Add(UClosed != null ? UClosed.ToStepValue() : "$");
			parameters.Add(VClosed != null ? VClosed.ToStepValue() : "$");
			parameters.Add(SelfIntersect != null ? SelfIntersect.ToStepValue() : "$");
			parameters.Add(UMultiplicities != null ? UMultiplicities.ToStepValue() : "$");
			parameters.Add(VMultiplicities != null ? VMultiplicities.ToStepValue() : "$");
			parameters.Add(UKnots != null ? UKnots.ToStepValue() : "$");
			parameters.Add(VKnots != null ? VKnots.ToStepValue() : "$");
			parameters.Add(KnotSpec != null ? KnotSpec.ToStepValue() : "$");
			parameters.Add(WeightsData != null ? WeightsData.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
