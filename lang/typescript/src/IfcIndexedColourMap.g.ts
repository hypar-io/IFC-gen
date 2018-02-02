
import {BaseIfc} from "./BaseIfc"
import {IfcTessellatedFaceSet} from "./IfcTessellatedFaceSet.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcColourRgbList} from "./IfcColourRgbList.g"
import {IfcPositiveInteger} from "./IfcPositiveInteger.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedcolourmap.htm
 */
export class IfcIndexedColourMap extends IfcPresentationItem {
	MappedTo : IfcTessellatedFaceSet
	Opacity : IfcNormalisedRatioMeasure // optional
	Colours : IfcColourRgbList
	ColourIndex : Array<IfcPositiveInteger>

    constructor(mappedTo : IfcTessellatedFaceSet, colours : IfcColourRgbList, colourIndex : Array<IfcPositiveInteger>) {
        super()

		this.MappedTo = mappedTo
		this.Colours = colours
		this.ColourIndex = colourIndex

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.MappedTo != null ? BaseIfc.toStepValue(this.MappedTo) : "$");
		parameters.push(this.Opacity != null ? BaseIfc.toStepValue(this.Opacity) : "$");
		parameters.push(this.Colours != null ? BaseIfc.toStepValue(this.Colours) : "$");
		parameters.push(this.ColourIndex != null ? BaseIfc.toStepValue(this.ColourIndex) : "$");

        return parameters.join();
    }
}