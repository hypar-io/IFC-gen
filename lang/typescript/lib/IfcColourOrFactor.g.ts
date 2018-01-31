
import {Select} from "./Select"
import {IfcColourRgb} from "./IfcColourRgb.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"

export class IfcColourOrFactor extends Select {
    value : IfcColourRgb|IfcNormalisedRatioMeasure
}
