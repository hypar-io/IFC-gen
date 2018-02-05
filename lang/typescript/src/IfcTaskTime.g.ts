
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum.g"
import {IfcTaskDurationEnum} from "./IfcTaskDurationEnum.g"
import {IfcDuration} from "./IfcDuration.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.g"
import {IfcSchedulingTime} from "./IfcSchedulingTime.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctasktime.htm
 */
export class IfcTaskTime extends IfcSchedulingTime {
	DurationType : IfcTaskDurationEnum // optional
	ScheduleDuration : IfcDuration // optional
	ScheduleStart : IfcDateTime // optional
	ScheduleFinish : IfcDateTime // optional
	EarlyStart : IfcDateTime // optional
	EarlyFinish : IfcDateTime // optional
	LateStart : IfcDateTime // optional
	LateFinish : IfcDateTime // optional
	FreeFloat : IfcDuration // optional
	TotalFloat : IfcDuration // optional
	IsCritical : IfcBoolean // optional
	StatusTime : IfcDateTime // optional
	ActualDuration : IfcDuration // optional
	ActualStart : IfcDateTime // optional
	ActualFinish : IfcDateTime // optional
	RemainingTime : IfcDuration // optional
	Completion : IfcPositiveRatioMeasure // optional

    constructor() {
        super()

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

            return parameters.join();
        }
}