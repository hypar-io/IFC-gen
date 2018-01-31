
import {Select} from "./Select"
import {IfcDerivedMeasureValue} from "./IfcDerivedMeasureValue.g"
import {IfcMeasureValue} from "./IfcMeasureValue.g"
import {IfcSimpleValue} from "./IfcSimpleValue.g"

export class IfcValue extends Select {
    value : IfcDerivedMeasureValue|IfcMeasureValue|IfcSimpleValue
}
