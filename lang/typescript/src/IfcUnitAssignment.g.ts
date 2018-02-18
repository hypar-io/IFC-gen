
import {BaseIfc} from "./BaseIfc"
import {IfcDerivedUnit} from "./IfcDerivedUnit.g"
import {IfcMonetaryUnit} from "./IfcMonetaryUnit.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcunitassignment.htm
 */
export class IfcUnitAssignment extends BaseIfc {
	Units : Array<IfcDerivedUnit|IfcMonetaryUnit|IfcNamedUnit>

    constructor(units : Array<IfcDerivedUnit|IfcMonetaryUnit|IfcNamedUnit>) {
        super()
		this.Units = units

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Units))

        return parameters.join();
    }
}