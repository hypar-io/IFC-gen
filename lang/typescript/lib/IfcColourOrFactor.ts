
import {Select} from "./Select"
import {IfcColourRgb} from "./IfcColourRgb"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure"

export class IfcColourOrFactor extends Select {
    value : IfcColourRgb|IfcNormalisedRatioMeasure
}
