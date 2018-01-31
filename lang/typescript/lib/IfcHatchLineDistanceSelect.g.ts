
import {Select} from "./Select"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcVector} from "./IfcVector"

export class IfcHatchLineDistanceSelect extends Select {
    value : IfcPositiveLengthMeasure|IfcVector
}
