
import {Select} from "./Select"
import {IfcBoolean} from "./IfcBoolean"
import {IfcLinearStiffnessMeasure} from "./IfcLinearStiffnessMeasure"

export class IfcTranslationalStiffnessSelect extends Select {
    value : IfcBoolean|IfcLinearStiffnessMeasure
}
