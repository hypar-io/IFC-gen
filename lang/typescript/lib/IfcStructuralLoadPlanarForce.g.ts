
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcPlanarForceMeasure} from "./IfcPlanarForceMeasure.g"
import {IfcStructuralLoadStatic} from "./IfcStructuralLoadStatic.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadplanarforce.htm
export class IfcStructuralLoadPlanarForce extends IfcStructuralLoadStatic {
	PlanarForceX : IfcPlanarForceMeasure// optional
	PlanarForceY : IfcPlanarForceMeasure// optional
	PlanarForceZ : IfcPlanarForceMeasure// optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.PlanarForceX != null ? this.toStepValue(this.PlanarForceX) : "$");
		parameters.push(this.PlanarForceY != null ? this.toStepValue(this.PlanarForceY) : "$");
		parameters.push(this.PlanarForceZ != null ? this.toStepValue(this.PlanarForceZ) : "$");

        return parameters.join();
    }
}