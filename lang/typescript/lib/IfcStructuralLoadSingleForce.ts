
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcForceMeasure} from "./IfcForceMeasure"
import {IfcTorqueMeasure} from "./IfcTorqueMeasure"
import {IfcStructuralLoadSingleForceWarping} from "./IfcStructuralLoadSingleForceWarping"
import {IfcStructuralLoadStatic} from "./IfcStructuralLoadStatic"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingleforce.htm
export class IfcStructuralLoadSingleForce extends IfcStructuralLoadStatic {
	ForceX : IfcForceMeasure// optional
	ForceY : IfcForceMeasure// optional
	ForceZ : IfcForceMeasure// optional
	MomentX : IfcTorqueMeasure// optional
	MomentY : IfcTorqueMeasure// optional
	MomentZ : IfcTorqueMeasure// optional

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

        return parameters.join();
    }
}