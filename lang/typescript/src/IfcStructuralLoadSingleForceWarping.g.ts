
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcForceMeasure} from "./IfcForceMeasure.g"
import {IfcTorqueMeasure} from "./IfcTorqueMeasure.g"
import {IfcWarpingMomentMeasure} from "./IfcWarpingMomentMeasure.g"
import {IfcStructuralLoadSingleForce} from "./IfcStructuralLoadSingleForce.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingleforcewarping.htm
 */
export class IfcStructuralLoadSingleForceWarping extends IfcStructuralLoadSingleForce {
	WarpingMoment : IfcWarpingMomentMeasure // optional

    constructor() {
        super()
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.ForceX))
		parameters.push(BaseIfc.toStepValue(this.ForceY))
		parameters.push(BaseIfc.toStepValue(this.ForceZ))
		parameters.push(BaseIfc.toStepValue(this.MomentX))
		parameters.push(BaseIfc.toStepValue(this.MomentY))
		parameters.push(BaseIfc.toStepValue(this.MomentZ))
		parameters.push(BaseIfc.toStepValue(this.WarpingMoment))

        return parameters.join();
    }
}