
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum"
import {IfcTimeOrRatioSelect} from "./IfcTimeOrRatioSelect"
import {IfcTaskDurationEnum} from "./IfcTaskDurationEnum"
import {IfcSchedulingTime} from "./IfcSchedulingTime"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclagtime.htm
export class IfcLagTime extends IfcSchedulingTime {
	LagValue : IfcTimeOrRatioSelect
	DurationType : IfcTaskDurationEnum

    constructor(lagValue : IfcTimeOrRatioSelect, durationType : IfcTaskDurationEnum) {
        super()

		this.LagValue = lagValue
		this.DurationType = durationType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.toStepValue(this.DataOrigin));
		parameters.push(this.UserDefinedDataOrigin != null ? this.toStepValue(this.UserDefinedDataOrigin) : "$");
		parameters.push(this.LagValue != null ? this.toStepValue(this.LagValue) : "$");
		parameters.push(this.toStepValue(this.DurationType));

        return parameters.join();
    }
}