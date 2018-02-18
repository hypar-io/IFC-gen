
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcForceMeasure} from "./IfcForceMeasure.g"
import {IfcStructuralConnectionCondition} from "./IfcStructuralConnectionCondition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfailureconnectioncondition.htm
 */
export class IfcFailureConnectionCondition extends IfcStructuralConnectionCondition {
	TensionFailureX : IfcForceMeasure // optional
	TensionFailureY : IfcForceMeasure // optional
	TensionFailureZ : IfcForceMeasure // optional
	CompressionFailureX : IfcForceMeasure // optional
	CompressionFailureY : IfcForceMeasure // optional
	CompressionFailureZ : IfcForceMeasure // optional

    constructor() {
        super()
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.TensionFailureX))
		parameters.push(BaseIfc.toStepValue(this.TensionFailureY))
		parameters.push(BaseIfc.toStepValue(this.TensionFailureZ))
		parameters.push(BaseIfc.toStepValue(this.CompressionFailureX))
		parameters.push(BaseIfc.toStepValue(this.CompressionFailureY))
		parameters.push(BaseIfc.toStepValue(this.CompressionFailureZ))

        return parameters.join();
    }
}