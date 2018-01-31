

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctasktimerecurring.htm"/>
	/// </summary>
	public  partial class IfcTaskTimeRecurring : IfcTaskTime
	{
		public IfcRecurrencePattern Recurrence{get;set;} 


		/// <summary>
		/// Construct a IfcTaskTimeRecurring with all required attributes.
		/// </summary>
		public IfcTaskTimeRecurring(IfcRecurrencePattern recurrence):base()
		{

			Recurrence = recurrence;

		}
		/// <summary>
		/// Construct a IfcTaskTimeRecurring with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTaskTimeRecurring(IfcLabel name,IfcDataOriginEnum dataOrigin,IfcLabel userDefinedDataOrigin,IfcTaskDurationEnum durationType,IfcDuration scheduleDuration,IfcDateTime scheduleStart,IfcDateTime scheduleFinish,IfcDateTime earlyStart,IfcDateTime earlyFinish,IfcDateTime lateStart,IfcDateTime lateFinish,IfcDuration freeFloat,IfcDuration totalFloat,IfcBoolean isCritical,IfcDateTime statusTime,IfcDuration actualDuration,IfcDateTime actualStart,IfcDateTime actualFinish,IfcDuration remainingTime,IfcPositiveRatioMeasure completion,IfcRecurrencePattern recurrence):base(name,dataOrigin,userDefinedDataOrigin,durationType,scheduleDuration,scheduleStart,scheduleFinish,earlyStart,earlyFinish,lateStart,lateFinish,freeFloat,totalFloat,isCritical,statusTime,actualDuration,actualStart,actualFinish,remainingTime,completion)
		{

			Recurrence = recurrence;

		}
		public static new IfcTaskTimeRecurring FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTaskTimeRecurring>(json); }

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
			parameters.Add(Recurrence != null ? Recurrence.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
