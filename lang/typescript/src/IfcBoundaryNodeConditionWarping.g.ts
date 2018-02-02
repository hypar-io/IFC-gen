
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
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.TranslationalStiffnessX != null ? BaseIfc.toStepValue(this.TranslationalStiffnessX) : "$");
		parameters.push(this.TranslationalStiffnessY != null ? BaseIfc.toStepValue(this.TranslationalStiffnessY) : "$");
		parameters.push(this.TranslationalStiffnessZ != null ? BaseIfc.toStepValue(this.TranslationalStiffnessZ) : "$");
		parameters.push(this.RotationalStiffnessX != null ? BaseIfc.toStepValue(this.RotationalStiffnessX) : "$");
		parameters.push(this.RotationalStiffnessY != null ? BaseIfc.toStepValue(this.RotationalStiffnessY) : "$");
		parameters.push(this.RotationalStiffnessZ != null ? BaseIfc.toStepValue(this.RotationalStiffnessZ) : "$");
		parameters.push(this.WarpingStiffness != null ? BaseIfc.toStepValue(this.WarpingStiffness) : "$");

        return parameters.join();
    }
}