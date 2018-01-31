
import {BaseIfc} from "./BaseIfc"
import {IfcParameterValue} from "./IfcParameterValue"
import {IfcPresentationItem} from "./IfcPresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturevertex.htm
export class IfcTextureVertex extends IfcPresentationItem {
	Coordinates : Array<IfcParameterValue>

    constructor(coordinates : Array<IfcParameterValue>) {
        super()

		this.Coordinates = coordinates

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Coordinates != null ? this.toStepValue(this.Coordinates) : "$");

        return parameters.join();
    }
}