
import {BaseIfc} from "./BaseIfc"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure"
import {IfcPresentationItem} from "./IfcPresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolourrgblist.htm
export class IfcColourRgbList extends IfcPresentationItem {
	ColourList : Array<Array<IfcNormalisedRatioMeasure>>

    constructor(colourList : Array<Array<IfcNormalisedRatioMeasure>>) {
        super()

		this.ColourList = colourList

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.ColourList != null ? this.toStepValue(this.ColourList) : "$");

        return parameters.join();
    }
}