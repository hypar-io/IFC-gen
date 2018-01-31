

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcoffsetcurve3d.htm"/>
	/// </summary>
	public  partial class IfcOffsetCurve3D : IfcCurve
	{
		public IfcCurve BasisCurve{get;set;} 
		public IfcLengthMeasure Distance{get;set;} 
		public IfcLogical SelfIntersect{get;set;} 
		public IfcDirection RefDirection{get;set;} 


		/// <summary>
		/// Construct a IfcOffsetCurve3D with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcOffsetCurve3D(IfcCurve basisCurve,IfcLengthMeasure distance,IfcLogical selfIntersect,IfcDirection refDirection):base()
		{

			BasisCurve = basisCurve;
			Distance = distance;
			SelfIntersect = selfIntersect;
			RefDirection = refDirection;

		}
		public static new IfcOffsetCurve3D FromJSON(string json){ return JsonConvert.DeserializeObject<IfcOffsetCurve3D>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(BasisCurve != null ? BasisCurve.ToStepValue() : "$");
			parameters.Add(Distance != null ? Distance.ToStepValue() : "$");
			parameters.Add(SelfIntersect != null ? SelfIntersect.ToStepValue() : "$");
			parameters.Add(RefDirection != null ? RefDirection.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
