
import {Select} from "./Select"
import {IfcBoolean} from "./IfcBoolean"
import {IfcRotationalStiffnessMeasure} from "./IfcRotationalStiffnessMeasure"

export class IfcRotationalStiffnessSelect extends Select {
    value : IfcBoolean|IfcRotationalStiffnessMeasure
}
