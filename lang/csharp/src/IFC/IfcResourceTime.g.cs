

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresourcetime.htm"/>
	/// </summary>
	public  partial class IfcResourceTime : IfcSchedulingTime
	{
		public IfcDuration ScheduleWork{get;set;} // optional
		public IfcPositiveRatioMeasure ScheduleUsage{get;set;} // optional
		public IfcDateTime ScheduleStart{get;set;} // optional
		public IfcDateTime ScheduleFinish{get;set;} // optional
		public IfcLabel ScheduleContour{get;set;} // optional
		public IfcDuration LevelingDelay{get;set;} // optional
		public IfcBoolean IsOverAllocated{get;set;} // optional
		public IfcDateTime StatusTime{get;set;} // optional
		public IfcDuration ActualWork{get;set;} // optional
		public IfcPositiveRatioMeasure ActualUsage{get;set;} // optional
		public IfcDateTime ActualStart{get;set;} // optional
		public IfcDateTime ActualFinish{get;set;} // optional
		public IfcDuration RemainingWork{get;set;} // optional
		public IfcPositiveRatioMeasure RemainingUsage{get;set;} // optional
		public IfcPositiveRatioMeasure Completion{get;set;} // optional


		/// <summary>
		/// Construct a IfcResourceTime with all required attributes.
		/// </summary>
		public IfcResourceTime():base()
		{


		}
		/// <summary>
		/// Construct a IfcResourceTime with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcResourceTime(IfcLabel name,IfcDataOriginEnum dataOrigin,IfcLabel userDefinedDataOrigin,IfcDuration scheduleWork,IfcPositiveRatioMeasure scheduleUsage,IfcDateTime scheduleStart,IfcDateTime scheduleFinish,IfcLabel scheduleContour,IfcDuration levelingDelay,IfcBoolean isOverAllocated,IfcDateTime statusTime,IfcDuration actualWork,IfcPositiveRatioMeasure actualUsage,IfcDateTime actualStart,IfcDateTime actualFinish,IfcDuration remainingWork,IfcPositiveRatioMeasure remainingUsage,IfcPositiveRatioMeasure completion):base(name,dataOrigin,userDefinedDataOrigin)
		{

			ScheduleWork = scheduleWork;
			ScheduleUsage = scheduleUsage;
			ScheduleStart = scheduleStart;
			ScheduleFinish = scheduleFinish;
			ScheduleContour = scheduleContour;
			LevelingDelay = levelingDelay;
			IsOverAllocated = isOverAllocated;
			StatusTime = statusTime;
			ActualWork = actualWork;
			ActualUsage = actualUsage;
			ActualStart = actualStart;
			ActualFinish = actualFinish;
			RemainingWork = remainingWork;
			RemainingUsage = remainingUsage;
			Completion = completion;

		}
		public static new IfcResourceTime FromJSON(string json){ return JsonConvert.DeserializeObject<IfcResourceTime>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(DataOrigin.ToStepValue());
			parameters.Add(UserDefinedDataOrigin != null ? UserDefinedDataOrigin.ToStepValue() : "$");
			parameters.Add(ScheduleWork != null ? ScheduleWork.ToStepValue() : "$");
			parameters.Add(ScheduleUsage != null ? ScheduleUsage.ToStepValue() : "$");
			parameters.Add(ScheduleStart != null ? ScheduleStart.ToStepValue() : "$");
			parameters.Add(ScheduleFinish != null ? ScheduleFinish.ToStepValue() : "$");
			parameters.Add(ScheduleContour != null ? ScheduleContour.ToStepValue() : "$");
			parameters.Add(LevelingDelay != null ? LevelingDelay.ToStepValue() : "$");
			parameters.Add(IsOverAllocated != null ? IsOverAllocated.ToStepValue() : "$");
			parameters.Add(StatusTime != null ? StatusTime.ToStepValue() : "$");
			parameters.Add(ActualWork != null ? ActualWork.ToStepValue() : "$");
			parameters.Add(ActualUsage != null ? ActualUsage.ToStepValue() : "$");
			parameters.Add(ActualStart != null ? ActualStart.ToStepValue() : "$");
			parameters.Add(ActualFinish != null ? ActualFinish.ToStepValue() : "$");
			parameters.Add(RemainingWork != null ? RemainingWork.ToStepValue() : "$");
			parameters.Add(RemainingUsage != null ? RemainingUsage.ToStepValue() : "$");
			parameters.Add(Completion != null ? Completion.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
