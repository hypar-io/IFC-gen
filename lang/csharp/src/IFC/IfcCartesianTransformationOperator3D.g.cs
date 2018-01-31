

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator3d.htm"/>
	/// </summary>
	public  partial class IfcCartesianTransformationOperator3D : IfcCartesianTransformationOperator
	{
		public IfcDirection Axis3{get;set;} // optional

        [JsonIgnore]
        public List<IfcDirection> U{get{throw new NotImplementedException($"Derived property logic has been implemented for U.");}} // derived


		/// <summary>
		/// Construct a IfcCartesianTransformationOperator3D with all required attributes.
		/// </summary>
		public IfcCartesianTransformationOperator3D(IfcCartesianPoint localOrigin):base(localOrigin)
		{


		}
		/// <summary>
		/// Construct a IfcCartesianTransformationOperator3D with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCartesianTransformationOperator3D(IfcDirection axis1,IfcDirection axis2,IfcCartesianPoint localOrigin,IfcReal scale,IfcDirection axis3):base(axis1,axis2,localOrigin,scale)
		{

			Axis3 = axis3;

		}
		public static new IfcCartesianTransformationOperator3D FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCartesianTransformationOperator3D>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Axis1 != null ? Axis1.ToStepValue() : "$");
			parameters.Add(Axis2 != null ? Axis2.ToStepValue() : "$");
			parameters.Add(LocalOrigin != null ? LocalOrigin.ToStepValue() : "$");
			parameters.Add(Scale != null ? Scale.ToStepValue() : "$");
			parameters.Add(Axis3 != null ? Axis3.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
