
import {Select} from "./Select"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcLinearStiffnessMeasure} from "./IfcLinearStiffnessMeasure.g"

export class IfcTranslationalStiffnessSelect extends Select {
    value : IfcBoolean|IfcLinearStiffnessMeasure
}
