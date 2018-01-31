
import {BaseIfc} from "./BaseIfc"
import {IfcTessellatedFaceSet} from "./IfcTessellatedFaceSet"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure"
import {IfcColourRgbList} from "./IfcColourRgbList"
import {IfcPositiveInteger} from "./IfcPositiveInteger"
import {IfcPresentationItem} from "./IfcPresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedcolourmap.htm
export class IfcIndexedColourMap extends IfcPresentationItem {
	MappedTo : IfcTessellatedFaceSet
	Opacity : IfcNormalisedRatioMeasure// optional
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
		parameters.push(this.MappedTo != null ? this.toStepValue(this.MappedTo) : "$");
		parameters.push(this.Opacity != null ? this.toStepValue(this.Opacity) : "$");
		parameters.push(this.Colours != null ? this.toStepValue(this.Colours) : "$");
		parameters.push(this.ColourIndex != null ? this.toStepValue(this.ColourIndex) : "$");

        return parameters.join();
    }
}