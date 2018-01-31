
import {Select} from "./Select"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcRotationalStiffnessMeasure} from "./IfcRotationalStiffnessMeasure.g"

export class IfcRotationalStiffnessSelect extends Select {
    value : IfcBoolean|IfcRotationalStiffnessMeasure
}
