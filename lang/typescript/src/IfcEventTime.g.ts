
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
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.DataOrigin))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedDataOrigin))
		parameters.push(BaseIfc.toStepValue(this.ActualDate))
		parameters.push(BaseIfc.toStepValue(this.EarlyDate))
		parameters.push(BaseIfc.toStepValue(this.LateDate))
		parameters.push(BaseIfc.toStepValue(this.ScheduleDate))

            return parameters.join();
        }
}