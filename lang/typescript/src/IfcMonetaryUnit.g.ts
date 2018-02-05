
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmonetaryunit.htm
 */
export class IfcMonetaryUnit extends BaseIfc {
	Currency : IfcLabel

    constructor(currency : IfcLabel) {
        super()

		this.Currency = currency

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.Currency))

            return parameters.join();
        }
}