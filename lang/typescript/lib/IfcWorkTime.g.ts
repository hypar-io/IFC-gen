
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum"
import {IfcRecurrencePattern} from "./IfcRecurrencePattern"
import {IfcDate} from "./IfcDate"
import {IfcSchedulingTime} from "./IfcSchedulingTime"

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