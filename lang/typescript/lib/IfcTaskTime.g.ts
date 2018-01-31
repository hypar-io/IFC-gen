
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum.g"
import {IfcTaskDurationEnum} from "./IfcTaskDurationEnum.g"
import {IfcDuration} from "./IfcDuration.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.g"
import {IfcTaskTimeRecurring} from "./IfcTaskTimeRecurring.g"
import {IfcSchedulingTime} from "./IfcSchedulingTime.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctasktime.htm
export class IfcTaskTime extends IfcSchedulingTime {
	DurationType : IfcTaskDurationEnum// optional
	ScheduleDuration : IfcDuration// optional
	ScheduleStart : IfcDateTime// optional
	ScheduleFinish : IfcDateTime// optional
	EarlyStart : IfcDateTime// optional
	EarlyFinish : IfcDateTime// optional
	LateStart : IfcDateTime// optional
	LateFinish : IfcDateTime// optional
	FreeFloat : IfcDuration// optional
	TotalFloat : IfcDuration// optional
	IsCritical : IfcBoolean// optional
	StatusTime : IfcDateTime// optional
	ActualDuration : IfcDuration// optional
	ActualStart : IfcDateTime// optional
	ActualFinish : IfcDateTime// optional
	RemainingTime : IfcDuration// optional
	Completion : IfcPositiveRatioMeasure// optional

    constructor() {
        super()

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

        return parameters.join();
    }
}