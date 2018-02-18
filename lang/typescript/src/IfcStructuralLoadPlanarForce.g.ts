
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcPlanarForceMeasure} from "./IfcPlanarForceMeasure.g"
import {IfcStructuralLoadStatic} from "./IfcStructuralLoadStatic.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadplanarforce.htm
 */
export class IfcStructuralLoadPlanarForce extends IfcStructuralLoadStatic {
	PlanarForceX : IfcPlanarForceMeasure // optional
	PlanarForceY : IfcPlanarForceMeasure // optional
	PlanarForceZ : IfcPlanarForceMeasure // optional

    constructor() {
        super()
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.PlanarForceX))
		parameters.push(BaseIfc.toStepValue(this.PlanarForceY))
		parameters.push(BaseIfc.toStepValue(this.PlanarForceZ))

        return parameters.join();
    }
}