

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcoffsetcurve2d.htm"/>
	/// </summary>
	public  partial class IfcOffsetCurve2D : IfcCurve
	{
		public IfcCurve BasisCurve{get;set;} 
		public IfcLengthMeasure Distance{get;set;} 
		public IfcLogical SelfIntersect{get;set;} 


		/// <summary>
		/// Construct a IfcOffsetCurve2D with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcOffsetCurve2D(IfcCurve basisCurve,IfcLengthMeasure distance,IfcLogical selfIntersect):base()
		{

			BasisCurve = basisCurve;
			Distance = distance;
			SelfIntersect = selfIntersect;

		}
		public static new IfcOffsetCurve2D FromJSON(string json){ return JsonConvert.DeserializeObject<IfcOffsetCurve2D>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(BasisCurve != null ? BasisCurve.ToStepValue() : "$");
			parameters.Add(Distance != null ? Distance.ToStepValue() : "$");
			parameters.Add(SelfIntersect != null ? SelfIntersect.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
