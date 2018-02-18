
import {BaseIfc} from "./BaseIfc"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolourrgblist.htm
 */
export class IfcColourRgbList extends IfcPresentationItem {
	ColourList : Array<Array<IfcNormalisedRatioMeasure>>

    constructor(colourList : Array<Array<IfcNormalisedRatioMeasure>>) {
        super()

		this.ColourList = colourList

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ColourList))

        return parameters.join();
    }
}