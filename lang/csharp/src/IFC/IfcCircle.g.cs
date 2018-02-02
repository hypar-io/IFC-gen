

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccircle.htm"/>
	/// </summary>
	public  partial class IfcCircle : IfcConic
	{
		public IfcPositiveLengthMeasure Radius{get;set;} 


		/// <summary>
		/// Construct a IfcCircle with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCircle(IfcAxis2Placement position,IfcPositiveLengthMeasure radius):base(position)
		{

			Radius = radius;

		}
		public static new IfcCircle FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCircle>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(Radius != null ? Radius.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
