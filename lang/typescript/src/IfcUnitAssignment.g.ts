
import {BaseIfc} from "./BaseIfc"
import {IfcUnit} from "./IfcUnit.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcunitassignment.htm
export class IfcUnitAssignment extends BaseIfc {
	Units : Array<IfcUnit>

    constructor(units : Array<IfcUnit>) {
        super()

		this.Units = units

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Units != null ? this.toStepValue(this.Units) : "$");

        return parameters.join();
    }
}