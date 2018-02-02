

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator2dnonuniform.htm"/>
	/// </summary>
	public  partial class IfcCartesianTransformationOperator2DnonUniform : IfcCartesianTransformationOperator2D
	{
		public IfcReal Scale2{get;set;} // optional

        [JsonIgnore]
        public IfcReal Scl2{get{throw new NotImplementedException($"Derived property logic has been implemented for Scl2.");}} // derived


		/// <summary>
		/// Construct a IfcCartesianTransformationOperator2DnonUniform with all required attributes.
		/// </summary>
		public IfcCartesianTransformationOperator2DnonUniform(IfcCartesianPoint localOrigin):base(localOrigin)
		{


		}
		/// <summary>
		/// Construct a IfcCartesianTransformationOperator2DnonUniform with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCartesianTransformationOperator2DnonUniform(IfcDirection axis1,IfcDirection axis2,IfcCartesianPoint localOrigin,IfcReal scale,IfcReal scale2):base(axis1,axis2,localOrigin,scale)
		{

			Scale2 = scale2;

		}
		public static new IfcCartesianTransformationOperator2DnonUniform FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCartesianTransformationOperator2DnonUniform>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Axis1 != null ? Axis1.ToStepValue() : "$");
			parameters.Add(Axis2 != null ? Axis2.ToStepValue() : "$");
			parameters.Add(LocalOrigin != null ? LocalOrigin.ToStepValue() : "$");
			parameters.Add(Scale != null ? Scale.ToStepValue() : "$");
			parameters.Add(Scale2 != null ? Scale2.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
