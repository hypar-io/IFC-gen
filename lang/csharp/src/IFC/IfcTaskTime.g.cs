

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctasktime.htm"/>
	/// </summary>
	public  partial class IfcTaskTime : IfcSchedulingTime
	{
		public IfcTaskDurationEnum DurationType{get;set;} // optional
		public IfcDuration ScheduleDuration{get;set;} // optional
		public IfcDateTime ScheduleStart{get;set;} // optional
		public IfcDateTime ScheduleFinish{get;set;} // optional
		public IfcDateTime EarlyStart{get;set;} // optional
		public IfcDateTime EarlyFinish{get;set;} // optional
		public IfcDateTime LateStart{get;set;} // optional
		public IfcDateTime LateFinish{get;set;} // optional
		public IfcDuration FreeFloat{get;set;} // optional
		public IfcDuration TotalFloat{get;set;} // optional
		public IfcBoolean IsCritical{get;set;} // optional
		public IfcDateTime StatusTime{get;set;} // optional
		public IfcDuration ActualDuration{get;set;} // optional
		public IfcDateTime ActualStart{get;set;} // optional
		public IfcDateTime ActualFinish{get;set;} // optional
		public IfcDuration RemainingTime{get;set;} // optional
		public IfcPositiveRatioMeasure Completion{get;set;} // optional


		/// <summary>
		/// Construct a IfcTaskTime with all required attributes.
		/// </summary>
		public IfcTaskTime():base()
		{


		}
		/// <summary>
		/// Construct a IfcTaskTime with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTaskTime(IfcLabel name,IfcDataOriginEnum dataOrigin,IfcLabel userDefinedDataOrigin,IfcTaskDurationEnum durationType,IfcDuration scheduleDuration,IfcDateTime scheduleStart,IfcDateTime scheduleFinish,IfcDateTime earlyStart,IfcDateTime earlyFinish,IfcDateTime lateStart,IfcDateTime lateFinish,IfcDuration freeFloat,IfcDuration totalFloat,IfcBoolean isCritical,IfcDateTime statusTime,IfcDuration actualDuration,IfcDateTime actualStart,IfcDateTime actualFinish,IfcDuration remainingTime,IfcPositiveRatioMeasure completion):base(name,dataOrigin,userDefinedDataOrigin)
		{

			DurationType = durationType;
			ScheduleDuration = scheduleDuration;
			ScheduleStart = scheduleStart;
			ScheduleFinish = scheduleFinish;
			EarlyStart = earlyStart;
			EarlyFinish = earlyFinish;
			LateStart = lateStart;
			LateFinish = lateFinish;
			FreeFloat = freeFloat;
			TotalFloat = totalFloat;
			IsCritical = isCritical;
			StatusTime = statusTime;
			ActualDuration = actualDuration;
			ActualStart = actualStart;
			ActualFinish = actualFinish;
			RemainingTime = remainingTime;
			Completion = completion;

		}
		public static new IfcTaskTime FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTaskTime>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(DataOrigin.ToStepValue());
			parameters.Add(UserDefinedDataOrigin != null ? UserDefinedDataOrigin.ToStepValue() : "$");
			parameters.Add(DurationType.ToStepValue());
			parameters.Add(ScheduleDuration != null ? ScheduleDuration.ToStepValue() : "$");
			parameters.Add(ScheduleStart != null ? ScheduleStart.ToStepValue() : "$");
			parameters.Add(ScheduleFinish != null ? ScheduleFinish.ToStepValue() : "$");
			parameters.Add(EarlyStart != null ? EarlyStart.ToStepValue() : "$");
			parameters.Add(EarlyFinish != null ? EarlyFinish.ToStepValue() : "$");
			parameters.Add(LateStart != null ? LateStart.ToStepValue() : "$");
			parameters.Add(LateFinish != null ? LateFinish.ToStepValue() : "$");
			parameters.Add(FreeFloat != null ? FreeFloat.ToStepValue() : "$");
			parameters.Add(TotalFloat != null ? TotalFloat.ToStepValue() : "$");
			parameters.Add(IsCritical != null ? IsCritical.ToStepValue() : "$");
			parameters.Add(StatusTime != null ? StatusTime.ToStepValue() : "$");
			parameters.Add(ActualDuration != null ? ActualDuration.ToStepValue() : "$");
			parameters.Add(ActualStart != null ? ActualStart.ToStepValue() : "$");
			parameters.Add(ActualFinish != null ? ActualFinish.ToStepValue() : "$");
			parameters.Add(RemainingTime != null ? RemainingTime.ToStepValue() : "$");
			parameters.Add(Completion != null ? Completion.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
