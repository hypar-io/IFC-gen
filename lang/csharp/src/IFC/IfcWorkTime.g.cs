

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworktime.htm"/>
	/// </summary>
	public  partial class IfcWorkTime : IfcSchedulingTime
	{
		public IfcRecurrencePattern RecurrencePattern{get;set;} // optional
		public IfcDate Start{get;set;} // optional
		public IfcDate Finish{get;set;} // optional


		/// <summary>
		/// Construct a IfcWorkTime with all required attributes.
		/// </summary>
		public IfcWorkTime():base()
		{


		}
		/// <summary>
		/// Construct a IfcWorkTime with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcWorkTime(IfcLabel name,IfcDataOriginEnum dataOrigin,IfcLabel userDefinedDataOrigin,IfcRecurrencePattern recurrencePattern,IfcDate start,IfcDate finish):base(name,dataOrigin,userDefinedDataOrigin)
		{

			RecurrencePattern = recurrencePattern;
			Start = start;
			Finish = finish;

		}
		public static new IfcWorkTime FromJSON(string json){ return JsonConvert.DeserializeObject<IfcWorkTime>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(DataOrigin.ToStepValue());
			parameters.Add(UserDefinedDataOrigin != null ? UserDefinedDataOrigin.ToStepValue() : "$");
			parameters.Add(RecurrencePattern != null ? RecurrencePattern.ToStepValue() : "$");
			parameters.Add(Start != null ? Start.ToStepValue() : "$");
			parameters.Add(Finish != null ? Finish.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
