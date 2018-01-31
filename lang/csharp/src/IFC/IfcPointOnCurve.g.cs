

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpointoncurve.htm"/>
	/// </summary>
	public  partial class IfcPointOnCurve : IfcPoint
	{
		public IfcCurve BasisCurve{get;set;} 
		public IfcParameterValue PointParameter{get;set;} 

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcPointOnCurve with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPointOnCurve(IfcCurve basisCurve,IfcParameterValue pointParameter):base()
		{

			BasisCurve = basisCurve;
			PointParameter = pointParameter;

		}
		public static new IfcPointOnCurve FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPointOnCurve>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(BasisCurve != null ? BasisCurve.ToStepValue() : "$");
			parameters.Add(PointParameter != null ? PointParameter.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
