

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrecurrencepattern.htm"/>
	/// </summary>
	public  partial class IfcRecurrencePattern : BaseIfc
	{
		public IfcRecurrenceTypeEnum RecurrenceType{get;set;} 
		public List<IfcDayInMonthNumber> DayComponent{get;set;} // optional
		public List<IfcDayInWeekNumber> WeekdayComponent{get;set;} // optional
		public List<IfcMonthInYearNumber> MonthComponent{get;set;} // optional
		public IfcInteger Position{get;set;} // optional
		public IfcInteger Interval{get;set;} // optional
		public IfcInteger Occurrences{get;set;} // optional
		public List<IfcTimePeriod> TimePeriods{get;set;} // optional


		/// <summary>
		/// Construct a IfcRecurrencePattern with all required attributes.
		/// </summary>
		public IfcRecurrencePattern(IfcRecurrenceTypeEnum recurrenceType):base()
		{
			DayComponent = new List<IfcDayInMonthNumber>();
			WeekdayComponent = new List<IfcDayInWeekNumber>();
			MonthComponent = new List<IfcMonthInYearNumber>();
			TimePeriods = new List<IfcTimePeriod>();

			RecurrenceType = recurrenceType;

		}
		/// <summary>
		/// Construct a IfcRecurrencePattern with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRecurrencePattern(IfcRecurrenceTypeEnum recurrenceType,List<IfcDayInMonthNumber> dayComponent,List<IfcDayInWeekNumber> weekdayComponent,List<IfcMonthInYearNumber> monthComponent,IfcInteger position,IfcInteger interval,IfcInteger occurrences,List<IfcTimePeriod> timePeriods):base()
		{

			RecurrenceType = recurrenceType;
			DayComponent = dayComponent;
			WeekdayComponent = weekdayComponent;
			MonthComponent = monthComponent;
			Position = position;
			Interval = interval;
			Occurrences = occurrences;
			TimePeriods = timePeriods;

		}
		public static  IfcRecurrencePattern FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRecurrencePattern>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(RecurrenceType.ToStepValue());
			parameters.Add(DayComponent != null ? DayComponent.ToStepValue() : "$");
			parameters.Add(WeekdayComponent != null ? WeekdayComponent.ToStepValue() : "$");
			parameters.Add(MonthComponent != null ? MonthComponent.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(Interval != null ? Interval.ToStepValue() : "$");
			parameters.Add(Occurrences != null ? Occurrences.ToStepValue() : "$");
			parameters.Add(TimePeriods != null ? TimePeriods.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
