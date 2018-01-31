
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcThermodynamicTemperatureMeasure} from "./IfcThermodynamicTemperatureMeasure"
import {IfcStructuralLoadStatic} from "./IfcStructuralLoadStatic"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadtemperature.htm
export class IfcStructuralLoadTemperature extends IfcStructuralLoadStatic {
	DeltaTConstant : IfcThermodynamicTemperatureMeasure// optional
	DeltaTY : IfcThermodynamicTemperatureMeasure// optional
	DeltaTZ : IfcThermodynamicTemperatureMeasure// optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.DeltaTConstant != null ? this.toStepValue(this.DeltaTConstant) : "$");
		parameters.push(this.DeltaTY != null ? this.toStepValue(this.DeltaTY) : "$");
		parameters.push(this.DeltaTZ != null ? this.toStepValue(this.DeltaTZ) : "$");

        return parameters.join();
    }
}