
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcSchedulingTime} from "./IfcSchedulingTime.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifceventtime.htm
 */
export class IfcEventTime extends IfcSchedulingTime {
	ActualDate : IfcDateTime // optional
	EarlyDate : IfcDateTime // optional
	LateDate : IfcDateTime // optional
	ScheduleDate : IfcDateTime // optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(BaseIfc.toStepValue(this.DataOrigin));
		parameters.push(this.UserDefinedDataOrigin != null ? BaseIfc.toStepValue(this.UserDefinedDataOrigin) : "$");
		parameters.push(this.ActualDate != null ? BaseIfc.toStepValue(this.ActualDate) : "$");
		parameters.push(this.EarlyDate != null ? BaseIfc.toStepValue(this.EarlyDate) : "$");
		parameters.push(this.LateDate != null ? BaseIfc.toStepValue(this.LateDate) : "$");
		parameters.push(this.ScheduleDate != null ? BaseIfc.toStepValue(this.ScheduleDate) : "$");

        return parameters.join();
    }
}