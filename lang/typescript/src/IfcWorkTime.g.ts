
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum.g"
import {IfcRecurrencePattern} from "./IfcRecurrencePattern.g"
import {IfcDate} from "./IfcDate.g"
import {IfcSchedulingTime} from "./IfcSchedulingTime.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworktime.htm
 */
export class IfcWorkTime extends IfcSchedulingTime {
	RecurrencePattern : IfcRecurrencePattern // optional
	Start : IfcDate // optional
	Finish : IfcDate // optional

    constructor() {
        super()
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.DataOrigin))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedDataOrigin))
		parameters.push(BaseIfc.toStepValue(this.RecurrencePattern))
		parameters.push(BaseIfc.toStepValue(this.Start))
		parameters.push(BaseIfc.toStepValue(this.Finish))

        return parameters.join();
    }
}