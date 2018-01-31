
import {Select} from "./Select"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit.g"
import {IfcReference} from "./IfcReference.g"
import {IfcValue} from "./IfcValue.g"

export class IfcAppliedValueSelect extends Select {
    value : IfcMeasureWithUnit|IfcReference|IfcValue
}
