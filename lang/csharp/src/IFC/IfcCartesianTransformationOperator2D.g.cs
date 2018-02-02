

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator2d.htm"/>
	/// </summary>
	public  partial class IfcCartesianTransformationOperator2D : IfcCartesianTransformationOperator
	{

        [JsonIgnore]
        public List<IfcDirection> U{get{throw new NotImplementedException($"Derived property logic has been implemented for U.");}} // derived


		/// <summary>
		/// Construct a IfcCartesianTransformationOperator2D with all required attributes.
		/// </summary>
		public IfcCartesianTransformationOperator2D(IfcCartesianPoint localOrigin):base(localOrigin)
		{


		}
		/// <summary>
		/// Construct a IfcCartesianTransformationOperator2D with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCartesianTransformationOperator2D(IfcDirection axis1,IfcDirection axis2,IfcCartesianPoint localOrigin,IfcReal scale):base(axis1,axis2,localOrigin,scale)
		{


		}
		public static new IfcCartesianTransformationOperator2D FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCartesianTransformationOperator2D>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Axis1 != null ? Axis1.ToStepValue() : "$");
			parameters.Add(Axis2 != null ? Axis2.ToStepValue() : "$");
			parameters.Add(LocalOrigin != null ? LocalOrigin.ToStepValue() : "$");
			parameters.Add(Scale != null ? Scale.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
