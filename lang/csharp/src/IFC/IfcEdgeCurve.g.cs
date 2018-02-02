

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedgecurve.htm"/>
	/// </summary>
	public  partial class IfcEdgeCurve : IfcEdge
	{
		public IfcCurve EdgeGeometry{get;set;} 
		public IfcBoolean SameSense{get;set;} 


		/// <summary>
		/// Construct a IfcEdgeCurve with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcEdgeCurve(IfcVertex edgeStart,IfcVertex edgeEnd,IfcCurve edgeGeometry,IfcBoolean sameSense):base(edgeStart,edgeEnd)
		{

			EdgeGeometry = edgeGeometry;
			SameSense = sameSense;

		}
		public static new IfcEdgeCurve FromJSON(string json){ return JsonConvert.DeserializeObject<IfcEdgeCurve>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(EdgeStart != null ? EdgeStart.ToStepValue() : "$");
			parameters.Add(EdgeEnd != null ? EdgeEnd.ToStepValue() : "$");
			parameters.Add(EdgeGeometry != null ? EdgeGeometry.ToStepValue() : "$");
			parameters.Add(SameSense != null ? SameSense.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
