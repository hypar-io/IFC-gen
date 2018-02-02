
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum.g"
import {IfcTaskDurationEnum} from "./IfcTaskDurationEnum.g"
import {IfcDuration} from "./IfcDuration.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.g"
import {IfcRecurrencePattern} from "./IfcRecurrencePattern.g"
import {IfcTaskTime} from "./IfcTaskTime.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctasktimerecurring.htm
 */
export class IfcTaskTimeRecurring extends IfcTaskTime {
	Recurrence : IfcRecurrencePattern

    constructor(recurrence : IfcRecurrencePattern) {
        super()

		this.Recurrence = recurrence

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(BaseIfc.toStepValue(this.DataOrigin));
		parameters.push(this.UserDefinedDataOrigin != null ? BaseIfc.toStepValue(this.UserDefinedDataOrigin) : "$");
		parameters.push(BaseIfc.toStepValue(this.DurationType));
		parameters.push(this.ScheduleDuration != null ? BaseIfc.toStepValue(this.ScheduleDuration) : "$");
		parameters.push(this.ScheduleStart != null ? BaseIfc.toStepValue(this.ScheduleStart) : "$");
		parameters.push(this.ScheduleFinish != null ? BaseIfc.toStepValue(this.ScheduleFinish) : "$");
		parameters.push(this.EarlyStart != null ? BaseIfc.toStepValue(this.EarlyStart) : "$");
		parameters.push(this.EarlyFinish != null ? BaseIfc.toStepValue(this.EarlyFinish) : "$");
		parameters.push(this.LateStart != null ? BaseIfc.toStepValue(this.LateStart) : "$");
		parameters.push(this.LateFinish != null ? BaseIfc.toStepValue(this.LateFinish) : "$");
		parameters.push(this.FreeFloat != null ? BaseIfc.toStepValue(this.FreeFloat) : "$");
		parameters.push(this.TotalFloat != null ? BaseIfc.toStepValue(this.TotalFloat) : "$");
		parameters.push(this.IsCritical != null ? BaseIfc.toStepValue(this.IsCritical) : "$");
		parameters.push(this.StatusTime != null ? BaseIfc.toStepValue(this.StatusTime) : "$");
		parameters.push(this.ActualDuration != null ? BaseIfc.toStepValue(this.ActualDuration) : "$");
		parameters.push(this.ActualStart != null ? BaseIfc.toStepValue(this.ActualStart) : "$");
		parameters.push(this.ActualFinish != null ? BaseIfc.toStepValue(this.ActualFinish) : "$");
		parameters.push(this.RemainingTime != null ? BaseIfc.toStepValue(this.RemainingTime) : "$");
		parameters.push(this.Completion != null ? BaseIfc.toStepValue(this.Completion) : "$");
		parameters.push(this.Recurrence != null ? BaseIfc.toStepValue(this.Recurrence) : "$");

        return parameters.join();
    }
}