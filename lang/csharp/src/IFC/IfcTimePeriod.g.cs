

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctimeperiod.htm"/>
	/// </summary>
	public  partial class IfcTimePeriod : BaseIfc
	{
		public IfcTime StartTime{get;set;} 
		public IfcTime EndTime{get;set;} 


		/// <summary>
		/// Construct a IfcTimePeriod with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTimePeriod(IfcTime startTime,IfcTime endTime):base()
		{

			StartTime = startTime;
			EndTime = endTime;

		}
		public static  IfcTimePeriod FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTimePeriod>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(StartTime != null ? StartTime.ToStepValue() : "$");
			parameters.Add(EndTime != null ? EndTime.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
