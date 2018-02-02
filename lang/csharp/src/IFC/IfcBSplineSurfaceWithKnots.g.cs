

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbsplinesurfacewithknots.htm"/>
	/// </summary>
	public  partial class IfcBSplineSurfaceWithKnots : IfcBSplineSurface
	{
		public List<IfcInteger> UMultiplicities{get;set;} 
		public List<IfcInteger> VMultiplicities{get;set;} 
		public List<IfcParameterValue> UKnots{get;set;} 
		public List<IfcParameterValue> VKnots{get;set;} 
		public IfcKnotType KnotSpec{get;set;} 

        [JsonIgnore]
        public IfcInteger KnotVUpper{get{throw new NotImplementedException($"Derived property logic has been implemented for KnotVUpper.");}} // derived

        [JsonIgnore]
        public IfcInteger KnotUUpper{get{throw new NotImplementedException($"Derived property logic has been implemented for KnotUUpper.");}} // derived


		/// <summary>
		/// Construct a IfcBSplineSurfaceWithKnots with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBSplineSurfaceWithKnots(IfcInteger uDegree,IfcInteger vDegree,List<List<IfcCartesianPoint>> controlPointsList,IfcBSplineSurfaceForm surfaceForm,IfcLogical uClosed,IfcLogical vClosed,IfcLogical selfIntersect,List<IfcInteger> uMultiplicities,List<IfcInteger> vMultiplicities,List<IfcParameterValue> uKnots,List<IfcParameterValue> vKnots,IfcKnotType knotSpec):base(uDegree,vDegree,controlPointsList,surfaceForm,uClosed,vClosed,selfIntersect)
		{

			UMultiplicities = uMultiplicities;
			VMultiplicities = vMultiplicities;
			UKnots = uKnots;
			VKnots = vKnots;
			KnotSpec = knotSpec;

		}
		public static new IfcBSplineSurfaceWithKnots FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBSplineSurfaceWithKnots>(json); }

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

            return string.Join(", ", parameters.ToArray());
        }
	}
}
