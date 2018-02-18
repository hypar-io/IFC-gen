
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
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.DataOrigin))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedDataOrigin))
		parameters.push(BaseIfc.toStepValue(this.DurationType))
		parameters.push(BaseIfc.toStepValue(this.ScheduleDuration))
		parameters.push(BaseIfc.toStepValue(this.ScheduleStart))
		parameters.push(BaseIfc.toStepValue(this.ScheduleFinish))
		parameters.push(BaseIfc.toStepValue(this.EarlyStart))
		parameters.push(BaseIfc.toStepValue(this.EarlyFinish))
		parameters.push(BaseIfc.toStepValue(this.LateStart))
		parameters.push(BaseIfc.toStepValue(this.LateFinish))
		parameters.push(BaseIfc.toStepValue(this.FreeFloat))
		parameters.push(BaseIfc.toStepValue(this.TotalFloat))
		parameters.push(BaseIfc.toStepValue(this.IsCritical))
		parameters.push(BaseIfc.toStepValue(this.StatusTime))
		parameters.push(BaseIfc.toStepValue(this.ActualDuration))
		parameters.push(BaseIfc.toStepValue(this.ActualStart))
		parameters.push(BaseIfc.toStepValue(this.ActualFinish))
		parameters.push(BaseIfc.toStepValue(this.RemainingTime))
		parameters.push(BaseIfc.toStepValue(this.Completion))
		parameters.push(BaseIfc.toStepValue(this.Recurrence))

        return parameters.join();
    }
}