
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcLinearStiffnessMeasure} from "./IfcLinearStiffnessMeasure.g"
import {IfcRotationalStiffnessMeasure} from "./IfcRotationalStiffnessMeasure.g"
import {IfcWarpingMomentMeasure} from "./IfcWarpingMomentMeasure.g"
import {IfcBoundaryNodeCondition} from "./IfcBoundaryNodeCondition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarynodeconditionwarping.htm
 */
export class IfcBoundaryNodeConditionWarping extends IfcBoundaryNodeCondition {
	WarpingStiffness : IfcBoolean|IfcWarpingMomentMeasure // optional

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
		parameters.push(BaseIfc.toStepValue(this.WarpingStiffness))

            return parameters.join();
        }
}