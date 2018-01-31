

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptdisksolid.htm"/>
	/// </summary>
	public  partial class IfcSweptDiskSolid : IfcSolidModel
	{
		public IfcCurve Directrix{get;set;} 
		public IfcPositiveLengthMeasure Radius{get;set;} 
		public IfcPositiveLengthMeasure InnerRadius{get;set;} // optional
		public IfcParameterValue StartParam{get;set;} // optional
		public IfcParameterValue EndParam{get;set;} // optional


		/// <summary>
		/// Construct a IfcSweptDiskSolid with all required attributes.
		/// </summary>
		public IfcSweptDiskSolid(IfcCurve directrix,IfcPositiveLengthMeasure radius):base()
		{

			Directrix = directrix;
			Radius = radius;

		}
		/// <summary>
		/// Construct a IfcSweptDiskSolid with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSweptDiskSolid(IfcCurve directrix,IfcPositiveLengthMeasure radius,IfcPositiveLengthMeasure innerRadius,IfcParameterValue startParam,IfcParameterValue endParam):base()
		{

			Directrix = directrix;
			Radius = radius;
			InnerRadius = innerRadius;
			StartParam = startParam;
			EndParam = endParam;

		}
		public static new IfcSweptDiskSolid FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSweptDiskSolid>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Directrix != null ? Directrix.ToStepValue() : "$");
			parameters.Add(Radius != null ? Radius.ToStepValue() : "$");
			parameters.Add(InnerRadius != null ? InnerRadius.ToStepValue() : "$");
			parameters.Add(StartParam != null ? StartParam.ToStepValue() : "$");
			parameters.Add(EndParam != null ? EndParam.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
