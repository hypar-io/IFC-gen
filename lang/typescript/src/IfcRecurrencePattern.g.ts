
import {BaseIfc} from "./BaseIfc"
import {IfcRecurrenceTypeEnum} from "./IfcRecurrenceTypeEnum.g"
import {IfcDayInMonthNumber} from "./IfcDayInMonthNumber.g"
import {IfcDayInWeekNumber} from "./IfcDayInWeekNumber.g"
import {IfcMonthInYearNumber} from "./IfcMonthInYearNumber.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcTimePeriod} from "./IfcTimePeriod.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrecurrencepattern.htm
 */
export class IfcRecurrencePattern extends BaseIfc {
	RecurrenceType : IfcRecurrenceTypeEnum
	DayComponent : Array<IfcDayInMonthNumber> // optional
	WeekdayComponent : Array<IfcDayInWeekNumber> // optional
	MonthComponent : Array<IfcMonthInYearNumber> // optional
	Position : IfcInteger // optional
	Interval : IfcInteger // optional
	Occurrences : IfcInteger // optional
	TimePeriods : Array<IfcTimePeriod> // optional

    constructor(recurrenceType : IfcRecurrenceTypeEnum) {
        super()
		this.RecurrenceType = recurrenceType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.RecurrenceType))
		parameters.push(BaseIfc.toStepValue(this.DayComponent))
		parameters.push(BaseIfc.toStepValue(this.WeekdayComponent))
		parameters.push(BaseIfc.toStepValue(this.MonthComponent))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Interval))
		parameters.push(BaseIfc.toStepValue(this.Occurrences))
		parameters.push(BaseIfc.toStepValue(this.TimePeriods))

        return parameters.join();
    }
}