
import {Select} from "./Select"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit"
import {IfcReference} from "./IfcReference"
import {IfcValue} from "./IfcValue"

export class IfcAppliedValueSelect extends Select {
    value : IfcMeasureWithUnit|IfcReference|IfcValue
}
