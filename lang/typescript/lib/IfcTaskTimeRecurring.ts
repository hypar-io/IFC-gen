
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum"
import {IfcTaskDurationEnum} from "./IfcTaskDurationEnum"
import {IfcDuration} from "./IfcDuration"
import {IfcDateTime} from "./IfcDateTime"
import {IfcBoolean} from "./IfcBoolean"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure"
import {IfcRecurrencePattern} from "./IfcRecurrencePattern"
import {IfcTaskTime} from "./IfcTaskTime"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctasktimerecurring.htm
export class IfcTaskTimeRecurring extends IfcTaskTime {
	Recurrence : IfcRecurrencePattern

    constructor(recurrence : IfcRecurrencePattern) {
        super()

		this.Recurrence = recurrence

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.toStepValue(this.DataOrigin));
		parameters.push(this.UserDefinedDataOrigin != null ? this.toStepValue(this.UserDefinedDataOrigin) : "$");
		parameters.push(this.toStepValue(this.DurationType));
		parameters.push(this.ScheduleDuration != null ? this.toStepValue(this.ScheduleDuration) : "$");
		parameters.push(this.ScheduleStart != null ? this.toStepValue(this.ScheduleStart) : "$");
		parameters.push(this.ScheduleFinish != null ? this.toStepValue(this.ScheduleFinish) : "$");
		parameters.push(this.EarlyStart != null ? this.toStepValue(this.EarlyStart) : "$");
		parameters.push(this.EarlyFinish != null ? this.toStepValue(this.EarlyFinish) : "$");
		parameters.push(this.LateStart != null ? this.toStepValue(this.LateStart) : "$");
		parameters.push(this.LateFinish != null ? this.toStepValue(this.LateFinish) : "$");
		parameters.push(this.FreeFloat != null ? this.toStepValue(this.FreeFloat) : "$");
		parameters.push(this.TotalFloat != null ? this.toStepValue(this.TotalFloat) : "$");
		parameters.push(this.IsCritical != null ? this.toStepValue(this.IsCritical) : "$");
		parameters.push(this.StatusTime != null ? this.toStepValue(this.StatusTime) : "$");
		parameters.push(this.ActualDuration != null ? this.toStepValue(this.ActualDuration) : "$");
		parameters.push(this.ActualStart != null ? this.toStepValue(this.ActualStart) : "$");
		parameters.push(this.ActualFinish != null ? this.toStepValue(this.ActualFinish) : "$");
		parameters.push(this.RemainingTime != null ? this.toStepValue(this.RemainingTime) : "$");
		parameters.push(this.Completion != null ? this.toStepValue(this.Completion) : "$");
		parameters.push(this.Recurrence != null ? this.toStepValue(this.Recurrence) : "$");

        return parameters.join();
    }
}