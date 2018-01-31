
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum"
import {IfcDateTime} from "./IfcDateTime"
import {IfcSchedulingTime} from "./IfcSchedulingTime"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifceventtime.htm
export class IfcEventTime extends IfcSchedulingTime {
	ActualDate : IfcDateTime// optional
	EarlyDate : IfcDateTime// optional
	LateDate : IfcDateTime// optional
	ScheduleDate : IfcDateTime// optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.toStepValue(this.DataOrigin));
		parameters.push(this.UserDefinedDataOrigin != null ? this.toStepValue(this.UserDefinedDataOrigin) : "$");
		parameters.push(this.ActualDate != null ? this.toStepValue(this.ActualDate) : "$");
		parameters.push(this.EarlyDate != null ? this.toStepValue(this.EarlyDate) : "$");
		parameters.push(this.LateDate != null ? this.toStepValue(this.LateDate) : "$");
		parameters.push(this.ScheduleDate != null ? this.toStepValue(this.ScheduleDate) : "$");

        return parameters.join();
    }
}