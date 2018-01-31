
import {Select} from "./Select"
import {IfcAppliedValue} from "./IfcAppliedValue"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit"
import {IfcReference} from "./IfcReference"
import {IfcTable} from "./IfcTable"
import {IfcTimeSeries} from "./IfcTimeSeries"
import {IfcValue} from "./IfcValue"

export class IfcMetricValueSelect extends Select {
    value : IfcAppliedValue|IfcMeasureWithUnit|IfcReference|IfcTable|IfcTimeSeries|IfcValue
}
