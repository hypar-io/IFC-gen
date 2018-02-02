
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcThermodynamicTemperatureMeasure} from "./IfcThermodynamicTemperatureMeasure.g"
import {IfcStructuralLoadStatic} from "./IfcStructuralLoadStatic.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadtemperature.htm
 */
export class IfcStructuralLoadTemperature extends IfcStructuralLoadStatic {
	DeltaTConstant : IfcThermodynamicTemperatureMeasure // optional
	DeltaTY : IfcThermodynamicTemperatureMeasure // optional
	DeltaTZ : IfcThermodynamicTemperatureMeasure // optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.DeltaTConstant != null ? BaseIfc.toStepValue(this.DeltaTConstant) : "$");
		parameters.push(this.DeltaTY != null ? BaseIfc.toStepValue(this.DeltaTY) : "$");
		parameters.push(this.DeltaTZ != null ? BaseIfc.toStepValue(this.DeltaTZ) : "$");

        return parameters.join();
    }
}