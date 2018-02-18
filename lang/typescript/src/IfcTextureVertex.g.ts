
import {BaseIfc} from "./BaseIfc"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturevertex.htm
 */
export class IfcTextureVertex extends IfcPresentationItem {
	Coordinates : Array<IfcParameterValue>

    constructor(coordinates : Array<IfcParameterValue>) {
        super()

		this.Coordinates = coordinates

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Coordinates))

        return parameters.join();
    }
}