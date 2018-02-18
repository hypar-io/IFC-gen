
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcLinearStiffnessMeasure} from "./IfcLinearStiffnessMeasure.g"
import {IfcRotationalStiffnessMeasure} from "./IfcRotationalStiffnessMeasure.g"
import {IfcBoundaryCondition} from "./IfcBoundaryCondition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarynodecondition.htm
 */
export class IfcBoundaryNodeCondition extends IfcBoundaryCondition {
	TranslationalStiffnessX : IfcBoolean|IfcLinearStiffnessMeasure // optional
	TranslationalStiffnessY : IfcBoolean|IfcLinearStiffnessMeasure // optional
	TranslationalStiffnessZ : IfcBoolean|IfcLinearStiffnessMeasure // optional
	RotationalStiffnessX : IfcBoolean|IfcRotationalStiffnessMeasure // optional
	RotationalStiffnessY : IfcBoolean|IfcRotationalStiffnessMeasure // optional
	RotationalStiffnessZ : IfcBoolean|IfcRotationalStiffnessMeasure // optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessX))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessY))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessZ))
		parameters.push(BaseIfc.toStepValue(this.RotationalStiffnessX))
		parameters.push(BaseIfc.toStepValue(this.RotationalStiffnessY))
		parameters.push(BaseIfc.toStepValue(this.RotationalStiffnessZ))

        return parameters.join();
    }
}