
import {Select} from "./Select"
import {IfcDerivedMeasureValue} from "./IfcDerivedMeasureValue"
import {IfcMeasureValue} from "./IfcMeasureValue"
import {IfcSimpleValue} from "./IfcSimpleValue"

export class IfcValue extends Select {
    value : IfcDerivedMeasureValue|IfcMeasureValue|IfcSimpleValue
}
