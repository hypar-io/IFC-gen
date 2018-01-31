

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpointonsurface.htm"/>
	/// </summary>
	public  partial class IfcPointOnSurface : IfcPoint
	{
		public IfcSurface BasisSurface{get;set;} 
		public IfcParameterValue PointParameterU{get;set;} 
		public IfcParameterValue PointParameterV{get;set;} 

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcPointOnSurface with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPointOnSurface(IfcSurface basisSurface,IfcParameterValue pointParameterU,IfcParameterValue pointParameterV):base()
		{

			BasisSurface = basisSurface;
			PointParameterU = pointParameterU;
			PointParameterV = pointParameterV;

		}
		public static new IfcPointOnSurface FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPointOnSurface>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(BasisSurface != null ? BasisSurface.ToStepValue() : "$");
			parameters.Add(PointParameterU != null ? PointParameterU.ToStepValue() : "$");
			parameters.Add(PointParameterV != null ? PointParameterV.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
