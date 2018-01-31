
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum.g"
import {IfcRecurrencePattern} from "./IfcRecurrencePattern.g"
import {IfcDate} from "./IfcDate.g"
import {IfcSchedulingTime} from "./IfcSchedulingTime.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworktime.htm
export class IfcWorkTime extends IfcSchedulingTime {
	RecurrencePattern : IfcRecurrencePattern// optional
	Start : IfcDate// optional
	Finish : IfcDate// optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.toStepValue(this.DataOrigin));
		parameters.push(this.UserDefinedDataOrigin != null ? this.toStepValue(this.UserDefinedDataOrigin) : "$");
		parameters.push(this.RecurrencePattern != null ? this.toStepValue(this.RecurrencePattern) : "$");
		parameters.push(this.Start != null ? this.toStepValue(this.Start) : "$");
		parameters.push(this.Finish != null ? this.toStepValue(this.Finish) : "$");

        return parameters.join();
    }
}