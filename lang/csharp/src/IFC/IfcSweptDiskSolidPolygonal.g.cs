

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptdisksolidpolygonal.htm"/>
	/// </summary>
	public  partial class IfcSweptDiskSolidPolygonal : IfcSweptDiskSolid
	{
		public IfcPositiveLengthMeasure FilletRadius{get;set;} // optional


		/// <summary>
		/// Construct a IfcSweptDiskSolidPolygonal with all required attributes.
		/// </summary>
		public IfcSweptDiskSolidPolygonal(IfcCurve directrix,IfcPositiveLengthMeasure radius):base(directrix,radius)
		{


		}
		/// <summary>
		/// Construct a IfcSweptDiskSolidPolygonal with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSweptDiskSolidPolygonal(IfcCurve directrix,IfcPositiveLengthMeasure radius,IfcPositiveLengthMeasure innerRadius,IfcParameterValue startParam,IfcParameterValue endParam,IfcPositiveLengthMeasure filletRadius):base(directrix,radius,innerRadius,startParam,endParam)
		{

			FilletRadius = filletRadius;

		}
		public static new IfcSweptDiskSolidPolygonal FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSweptDiskSolidPolygonal>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Directrix != null ? Directrix.ToStepValue() : "$");
			parameters.Add(Radius != null ? Radius.ToStepValue() : "$");
			parameters.Add(InnerRadius != null ? InnerRadius.ToStepValue() : "$");
			parameters.Add(StartParam != null ? StartParam.ToStepValue() : "$");
			parameters.Add(EndParam != null ? EndParam.ToStepValue() : "$");
			parameters.Add(FilletRadius != null ? FilletRadius.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
