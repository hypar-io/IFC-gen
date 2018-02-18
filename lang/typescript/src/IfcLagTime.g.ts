
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum.g"
import {IfcDuration} from "./IfcDuration.g"
import {IfcRatioMeasure} from "./IfcRatioMeasure.g"
import {IfcTaskDurationEnum} from "./IfcTaskDurationEnum.g"
import {IfcSchedulingTime} from "./IfcSchedulingTime.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclagtime.htm
 */
export class IfcLagTime extends IfcSchedulingTime {
	LagValue : IfcDuration|IfcRatioMeasure
	DurationType : IfcTaskDurationEnum

    constructor(lagValue : IfcDuration|IfcRatioMeasure, durationType : IfcTaskDurationEnum) {
        super()

		this.LagValue = lagValue
		this.DurationType = durationType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.DataOrigin))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedDataOrigin))
		parameters.push(BaseIfc.toStepValue(this.LagValue))
		parameters.push(BaseIfc.toStepValue(this.DurationType))

        return parameters.join();
    }
}