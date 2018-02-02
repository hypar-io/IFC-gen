
import {BaseIfc} from "./BaseIfc"
import {IfcNamedUnit} from "./IfcNamedUnit.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcderivedunitelement.htm
 */
export class IfcDerivedUnitElement extends BaseIfc {
	Unit : IfcNamedUnit
	Exponent : number

    constructor(unit : IfcNamedUnit, exponent : number) {
        super()

		this.Unit = unit
		this.Exponent = exponent

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Unit != null ? BaseIfc.toStepValue(this.Unit) : "$");
		parameters.push(this.Exponent != null ? BaseIfc.toStepValue(this.Exponent) : "$");

        return parameters.join();
    }
}