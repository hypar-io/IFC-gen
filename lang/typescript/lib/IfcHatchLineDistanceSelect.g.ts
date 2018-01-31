
import {Select} from "./Select"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcVector} from "./IfcVector.g"

export class IfcHatchLineDistanceSelect extends Select {
    value : IfcPositiveLengthMeasure|IfcVector
}
