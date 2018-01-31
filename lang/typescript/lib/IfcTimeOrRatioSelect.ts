
import {Select} from "./Select"
import {IfcDuration} from "./IfcDuration"
import {IfcRatioMeasure} from "./IfcRatioMeasure"

export class IfcTimeOrRatioSelect extends Select {
    value : IfcDuration|IfcRatioMeasure
}
