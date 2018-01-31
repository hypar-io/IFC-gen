
import {Select} from "./Select"
import {IfcDescriptiveMeasure} from "./IfcDescriptiveMeasure"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure"
import {IfcRatioMeasure} from "./IfcRatioMeasure"

export class IfcSizeSelect extends Select {
    value : IfcDescriptiveMeasure|IfcLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveLengthMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure
}
