
import {BaseIfc} from "./BaseIfc"
import {IfcRecurrenceTypeEnum} from "./IfcRecurrenceTypeEnum.g"
import {IfcDayInMonthNumber} from "./IfcDayInMonthNumber.g"
import {IfcDayInWeekNumber} from "./IfcDayInWeekNumber.g"
import {IfcMonthInYearNumber} from "./IfcMonthInYearNumber.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcTimePeriod} from "./IfcTimePeriod.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrecurrencepattern.htm
export class IfcRecurrencePattern extends BaseIfc {
	RecurrenceType : IfcRecurrenceTypeEnum
	DayComponent : Array<IfcDayInMonthNumber>// optional
	WeekdayComponent : Array<IfcDayInWeekNumber>// optional
	MonthComponent : Array<IfcMonthInYearNumber>// optional
	Position : IfcInteger// optional
	Interval : IfcInteger// optional
	Occurrences : IfcInteger// optional
	TimePeriods : Array<IfcTimePeriod>// optional

    constructor(recurrenceType : IfcRecurrenceTypeEnum) {
        super()
		this.DayComponent = new Array<IfcDayInMonthNumber>()
		this.WeekdayComponent = new Array<IfcDayInWeekNumber>()
		this.MonthComponent = new Array<IfcMonthInYearNumber>()
		this.TimePeriods = new Array<IfcTimePeriod>()

		this.RecurrenceType = recurrenceType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.RecurrenceType));
		parameters.push(this.DayComponent != null ? this.toStepValue(this.DayComponent) : "$");
		parameters.push(this.WeekdayComponent != null ? this.toStepValue(this.WeekdayComponent) : "$");
		parameters.push(this.MonthComponent != null ? this.toStepValue(this.MonthComponent) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.Interval != null ? this.toStepValue(this.Interval) : "$");
		parameters.push(this.Occurrences != null ? this.toStepValue(this.Occurrences) : "$");
		parameters.push(this.TimePeriods != null ? this.toStepValue(this.TimePeriods) : "$");

        return parameters.join();
    }
}