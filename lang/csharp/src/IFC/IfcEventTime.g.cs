

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifceventtime.htm"/>
	/// </summary>
	public  partial class IfcEventTime : IfcSchedulingTime
	{
		public IfcDateTime ActualDate{get;set;} // optional
		public IfcDateTime EarlyDate{get;set;} // optional
		public IfcDateTime LateDate{get;set;} // optional
		public IfcDateTime ScheduleDate{get;set;} // optional


		/// <summary>
		/// Construct a IfcEventTime with all required attributes.
		/// </summary>
		public IfcEventTime():base()
		{


		}
		/// <summary>
		/// Construct a IfcEventTime with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcEventTime(IfcLabel name,IfcDataOriginEnum dataOrigin,IfcLabel userDefinedDataOrigin,IfcDateTime actualDate,IfcDateTime earlyDate,IfcDateTime lateDate,IfcDateTime scheduleDate):base(name,dataOrigin,userDefinedDataOrigin)
		{

			ActualDate = actualDate;
			EarlyDate = earlyDate;
			LateDate = lateDate;
			ScheduleDate = scheduleDate;

		}
		public static new IfcEventTime FromJSON(string json){ return JsonConvert.DeserializeObject<IfcEventTime>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(DataOrigin.ToStepValue());
			parameters.Add(UserDefinedDataOrigin != null ? UserDefinedDataOrigin.ToStepValue() : "$");
			parameters.Add(ActualDate != null ? ActualDate.ToStepValue() : "$");
			parameters.Add(EarlyDate != null ? EarlyDate.ToStepValue() : "$");
			parameters.Add(LateDate != null ? LateDate.ToStepValue() : "$");
			parameters.Add(ScheduleDate != null ? ScheduleDate.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
