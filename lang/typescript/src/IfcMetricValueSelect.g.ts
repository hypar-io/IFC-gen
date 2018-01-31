
import {Select} from "./Select"
import {IfcAppliedValue} from "./IfcAppliedValue.g"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit.g"
import {IfcReference} from "./IfcReference.g"
import {IfcTable} from "./IfcTable.g"
import {IfcTimeSeries} from "./IfcTimeSeries.g"
import {IfcValue} from "./IfcValue.g"

export class IfcMetricValueSelect extends Select {
    value : IfcAppliedValue|IfcMeasureWithUnit|IfcReference|IfcTable|IfcTimeSeries|IfcValue
}
