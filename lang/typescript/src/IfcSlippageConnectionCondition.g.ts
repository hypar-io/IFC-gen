
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcStructuralConnectionCondition} from "./IfcStructuralConnectionCondition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcslippageconnectioncondition.htm
 */
export class IfcSlippageConnectionCondition extends IfcStructuralConnectionCondition {
	SlippageX : IfcLengthMeasure // optional
	SlippageY : IfcLengthMeasure // optional
	SlippageZ : IfcLengthMeasure // optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.SlippageX))
		parameters.push(BaseIfc.toStepValue(this.SlippageY))
		parameters.push(BaseIfc.toStepValue(this.SlippageZ))

        return parameters.join();
    }
}