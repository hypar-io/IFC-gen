
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcTranslationalStiffnessSelect} from "./IfcTranslationalStiffnessSelect"
import {IfcRotationalStiffnessSelect} from "./IfcRotationalStiffnessSelect"
import {IfcWarpingStiffnessSelect} from "./IfcWarpingStiffnessSelect"
import {IfcBoundaryNodeCondition} from "./IfcBoundaryNodeCondition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarynodeconditionwarping.htm
export class IfcBoundaryNodeConditionWarping extends IfcBoundaryNodeCondition {
	WarpingStiffness : IfcWarpingStiffnessSelect// optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.TranslationalStiffnessX != null ? this.toStepValue(this.TranslationalStiffnessX) : "$");
		parameters.push(this.TranslationalStiffnessY != null ? this.toStepValue(this.TranslationalStiffnessY) : "$");
		parameters.push(this.TranslationalStiffnessZ != null ? this.toStepValue(this.TranslationalStiffnessZ) : "$");
		parameters.push(this.RotationalStiffnessX != null ? this.toStepValue(this.RotationalStiffnessX) : "$");
		parameters.push(this.RotationalStiffnessY != null ? this.toStepValue(this.RotationalStiffnessY) : "$");
		parameters.push(this.RotationalStiffnessZ != null ? this.toStepValue(this.RotationalStiffnessZ) : "$");
		parameters.push(this.WarpingStiffness != null ? this.toStepValue(this.WarpingStiffness) : "$");

        return parameters.join();
    }
}