
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum"
import {IfcDuration} from "./IfcDuration"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure"
import {IfcDateTime} from "./IfcDateTime"
import {IfcBoolean} from "./IfcBoolean"
import {IfcSchedulingTime} from "./IfcSchedulingTime"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresourcetime.htm
export class IfcResourceTime extends IfcSchedulingTime {
	ScheduleWork : IfcDuration// optional
	ScheduleUsage : IfcPositiveRatioMeasure// optional
	ScheduleStart : IfcDateTime// optional
	ScheduleFinish : IfcDateTime// optional
	ScheduleContour : IfcLabel// optional
	LevelingDelay : IfcDuration// optional
	IsOverAllocated : IfcBoolean// optional
	StatusTime : IfcDateTime// optional
	ActualWork : IfcDuration// optional
	ActualUsage : IfcPositiveRatioMeasure// optional
	ActualStart : IfcDateTime// optional
	ActualFinish : IfcDateTime// optional
	RemainingWork : IfcDuration// optional
	RemainingUsage : IfcPositiveRatioMeasure// optional
	Completion : IfcPositiveRatioMeasure// optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.toStepValue(this.DataOrigin));
		parameters.push(this.UserDefinedDataOrigin != null ? this.toStepValue(this.UserDefinedDataOrigin) : "$");
		parameters.push(this.ScheduleWork != null ? this.toStepValue(this.ScheduleWork) : "$");
		parameters.push(this.ScheduleUsage != null ? this.toStepValue(this.ScheduleUsage) : "$");
		parameters.push(this.ScheduleStart != null ? this.toStepValue(this.ScheduleStart) : "$");
		parameters.push(this.ScheduleFinish != null ? this.toStepValue(this.ScheduleFinish) : "$");
		parameters.push(this.ScheduleContour != null ? this.toStepValue(this.ScheduleContour) : "$");
		parameters.push(this.LevelingDelay != null ? this.toStepValue(this.LevelingDelay) : "$");
		parameters.push(this.IsOverAllocated != null ? this.toStepValue(this.IsOverAllocated) : "$");
		parameters.push(this.StatusTime != null ? this.toStepValue(this.StatusTime) : "$");
		parameters.push(this.ActualWork != null ? this.toStepValue(this.ActualWork) : "$");
		parameters.push(this.ActualUsage != null ? this.toStepValue(this.ActualUsage) : "$");
		parameters.push(this.ActualStart != null ? this.toStepValue(this.ActualStart) : "$");
		parameters.push(this.ActualFinish != null ? this.toStepValue(this.ActualFinish) : "$");
		parameters.push(this.RemainingWork != null ? this.toStepValue(this.RemainingWork) : "$");
		parameters.push(this.RemainingUsage != null ? this.toStepValue(this.RemainingUsage) : "$");
		parameters.push(this.Completion != null ? this.toStepValue(this.Completion) : "$");

        return parameters.join();
    }
}