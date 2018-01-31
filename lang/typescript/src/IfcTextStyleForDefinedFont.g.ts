
import {BaseIfc} from "./BaseIfc"
import {IfcColour} from "./IfcColour.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstylefordefinedfont.htm
export class IfcTextStyleForDefinedFont extends IfcPresentationItem {
	Colour : IfcColour
	BackgroundColour : IfcColour// optional

    constructor(colour : IfcColour) {
        super()

		this.Colour = colour

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Colour != null ? this.toStepValue(this.Colour) : "$");
		parameters.push(this.BackgroundColour != null ? this.toStepValue(this.BackgroundColour) : "$");

        return parameters.join();
    }
}