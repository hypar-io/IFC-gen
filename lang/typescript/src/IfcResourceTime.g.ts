
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
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(BaseIfc.toStepValue(this.DataOrigin));
		parameters.push(this.UserDefinedDataOrigin != null ? BaseIfc.toStepValue(this.UserDefinedDataOrigin) : "$");
		parameters.push(this.ScheduleWork != null ? BaseIfc.toStepValue(this.ScheduleWork) : "$");
		parameters.push(this.ScheduleUsage != null ? BaseIfc.toStepValue(this.ScheduleUsage) : "$");
		parameters.push(this.ScheduleStart != null ? BaseIfc.toStepValue(this.ScheduleStart) : "$");
		parameters.push(this.ScheduleFinish != null ? BaseIfc.toStepValue(this.ScheduleFinish) : "$");
		parameters.push(this.ScheduleContour != null ? BaseIfc.toStepValue(this.ScheduleContour) : "$");
		parameters.push(this.LevelingDelay != null ? BaseIfc.toStepValue(this.LevelingDelay) : "$");
		parameters.push(this.IsOverAllocated != null ? BaseIfc.toStepValue(this.IsOverAllocated) : "$");
		parameters.push(this.StatusTime != null ? BaseIfc.toStepValue(this.StatusTime) : "$");
		parameters.push(this.ActualWork != null ? BaseIfc.toStepValue(this.ActualWork) : "$");
		parameters.push(this.ActualUsage != null ? BaseIfc.toStepValue(this.ActualUsage) : "$");
		parameters.push(this.ActualStart != null ? BaseIfc.toStepValue(this.ActualStart) : "$");
		parameters.push(this.ActualFinish != null ? BaseIfc.toStepValue(this.ActualFinish) : "$");
		parameters.push(this.RemainingWork != null ? BaseIfc.toStepValue(this.RemainingWork) : "$");
		parameters.push(this.RemainingUsage != null ? BaseIfc.toStepValue(this.RemainingUsage) : "$");
		parameters.push(this.Completion != null ? BaseIfc.toStepValue(this.Completion) : "$");

        return parameters.join();
    }
}