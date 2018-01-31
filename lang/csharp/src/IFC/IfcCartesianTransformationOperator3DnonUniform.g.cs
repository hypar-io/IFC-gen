

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator3dnonuniform.htm"/>
	/// </summary>
	public  partial class IfcCartesianTransformationOperator3DnonUniform : IfcCartesianTransformationOperator3D
	{
		public IfcReal Scale2{get;set;} // optional
		public IfcReal Scale3{get;set;} // optional

        [JsonIgnore]
        public IfcReal Scl2{get{throw new NotImplementedException($"Derived property logic has been implemented for Scl2.");}} // derived

        [JsonIgnore]
        public IfcReal Scl3{get{throw new NotImplementedException($"Derived property logic has been implemented for Scl3.");}} // derived


		/// <summary>
		/// Construct a IfcCartesianTransformationOperator3DnonUniform with all required attributes.
		/// </summary>
		public IfcCartesianTransformationOperator3DnonUniform(IfcCartesianPoint localOrigin):base(localOrigin)
		{


		}
		/// <summary>
		/// Construct a IfcCartesianTransformationOperator3DnonUniform with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCartesianTransformationOperator3DnonUniform(IfcDirection axis1,IfcDirection axis2,IfcCartesianPoint localOrigin,IfcReal scale,IfcDirection axis3,IfcReal scale2,IfcReal scale3):base(axis1,axis2,localOrigin,scale,axis3)
		{

			Scale2 = scale2;
			Scale3 = scale3;

		}
		public static new IfcCartesianTransformationOperator3DnonUniform FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCartesianTransformationOperator3DnonUniform>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Axis1 != null ? Axis1.ToStepValue() : "$");
			parameters.Add(Axis2 != null ? Axis2.ToStepValue() : "$");
			parameters.Add(LocalOrigin != null ? LocalOrigin.ToStepValue() : "$");
			parameters.Add(Scale != null ? Scale.ToStepValue() : "$");
			parameters.Add(Axis3 != null ? Axis3.ToStepValue() : "$");
			parameters.Add(Scale2 != null ? Scale2.ToStepValue() : "$");
			parameters.Add(Scale3 != null ? Scale3.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
