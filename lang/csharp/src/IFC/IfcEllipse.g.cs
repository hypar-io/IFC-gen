

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcellipse.htm"/>
	/// </summary>
	public  partial class IfcEllipse : IfcConic
	{
		public IfcPositiveLengthMeasure SemiAxis1{get;set;} 
		public IfcPositiveLengthMeasure SemiAxis2{get;set;} 


		/// <summary>
		/// Construct a IfcEllipse with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcEllipse(IfcAxis2Placement position,IfcPositiveLengthMeasure semiAxis1,IfcPositiveLengthMeasure semiAxis2):base(position)
		{

			SemiAxis1 = semiAxis1;
			SemiAxis2 = semiAxis2;

		}
		public static new IfcEllipse FromJSON(string json){ return JsonConvert.DeserializeObject<IfcEllipse>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(SemiAxis1 != null ? SemiAxis1.ToStepValue() : "$");
			parameters.Add(SemiAxis2 != null ? SemiAxis2.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
