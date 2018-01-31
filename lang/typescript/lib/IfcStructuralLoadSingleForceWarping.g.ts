
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcForceMeasure} from "./IfcForceMeasure.g"
import {IfcTorqueMeasure} from "./IfcTorqueMeasure.g"
import {IfcWarpingMomentMeasure} from "./IfcWarpingMomentMeasure.g"
import {IfcStructuralLoadSingleForce} from "./IfcStructuralLoadSingleForce.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingleforcewarping.htm
export class IfcStructuralLoadSingleForceWarping extends IfcStructuralLoadSingleForce {
	WarpingMoment : IfcWarpingMomentMeasure// optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.ForceX != null ? this.toStepValue(this.ForceX) : "$");
		parameters.push(this.ForceY != null ? this.toStepValue(this.ForceY) : "$");
		parameters.push(this.ForceZ != null ? this.toStepValue(this.ForceZ) : "$");
		parameters.push(this.MomentX != null ? this.toStepValue(this.MomentX) : "$");
		parameters.push(this.MomentY != null ? this.toStepValue(this.MomentY) : "$");
		parameters.push(this.MomentZ != null ? this.toStepValue(this.MomentZ) : "$");
		parameters.push(this.WarpingMoment != null ? this.toStepValue(this.WarpingMoment) : "$");

        return parameters.join();
    }
}