
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum.g"
import {IfcDuration} from "./IfcDuration.g"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcSchedulingTime} from "./IfcSchedulingTime.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresourcetime.htm
 */
export class IfcResourceTime extends IfcSchedulingTime {
	ScheduleWork : IfcDuration // optional
	ScheduleUsage : IfcPositiveRatioMeasure // optional
	ScheduleStart : IfcDateTime // optional
	ScheduleFinish : IfcDateTime // optional
	ScheduleContour : IfcLabel // optional
	LevelingDelay : IfcDuration // optional
	IsOverAllocated : IfcBoolean // optional
	StatusTime : IfcDateTime // optional
	ActualWork : IfcDuration // optional
	ActualUsage : IfcPositiveRatioMeasure // optional
	ActualStart : IfcDateTime // optional
	ActualFinish : IfcDateTime // optional
	RemainingWork : IfcDuration // optional
	RemainingUsage : IfcPositiveRatioMeasure // optional
	Completion : IfcPositiveRatioMeasure // optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.DataOrigin))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedDataOrigin))
		parameters.push(BaseIfc.toStepValue(this.ScheduleWork))
		parameters.push(BaseIfc.toStepValue(this.ScheduleUsage))
		parameters.push(BaseIfc.toStepValue(this.ScheduleStart))
		parameters.push(BaseIfc.toStepValue(this.ScheduleFinish))
		parameters.push(BaseIfc.toStepValue(this.ScheduleContour))
		parameters.push(BaseIfc.toStepValue(this.LevelingDelay))
		parameters.push(BaseIfc.toStepValue(this.IsOverAllocated))
		parameters.push(BaseIfc.toStepValue(this.StatusTime))
		parameters.push(BaseIfc.toStepValue(this.ActualWork))
		parameters.push(BaseIfc.toStepValue(this.ActualUsage))
		parameters.push(BaseIfc.toStepValue(this.ActualStart))
		parameters.push(BaseIfc.toStepValue(this.ActualFinish))
		parameters.push(BaseIfc.toStepValue(this.RemainingWork))
		parameters.push(BaseIfc.toStepValue(this.RemainingUsage))
		parameters.push(BaseIfc.toStepValue(this.Completion))

        return parameters.join();
    }
}