
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcForceMeasure} from "./IfcForceMeasure.g"
import {IfcTorqueMeasure} from "./IfcTorqueMeasure.g"
import {IfcStructuralLoadStatic} from "./IfcStructuralLoadStatic.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingleforce.htm
 */
export class IfcStructuralLoadSingleForce extends IfcStructuralLoadStatic {
	ForceX : IfcForceMeasure // optional
	ForceY : IfcForceMeasure // optional
	ForceZ : IfcForceMeasure // optional
	MomentX : IfcTorqueMeasure // optional
	MomentY : IfcTorqueMeasure // optional
	MomentZ : IfcTorqueMeasure // optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.ForceX != null ? BaseIfc.toStepValue(this.ForceX) : "$");
		parameters.push(this.ForceY != null ? BaseIfc.toStepValue(this.ForceY) : "$");
		parameters.push(this.ForceZ != null ? BaseIfc.toStepValue(this.ForceZ) : "$");
		parameters.push(this.MomentX != null ? BaseIfc.toStepValue(this.MomentX) : "$");
		parameters.push(this.MomentY != null ? BaseIfc.toStepValue(this.MomentY) : "$");
		parameters.push(this.MomentZ != null ? BaseIfc.toStepValue(this.MomentZ) : "$");

        return parameters.join();
    }
}