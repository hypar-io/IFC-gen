
import {Select} from "./Select"
import {IfcDuration} from "./IfcDuration.g"
import {IfcRatioMeasure} from "./IfcRatioMeasure.g"

export class IfcTimeOrRatioSelect extends Select {
    value : IfcDuration|IfcRatioMeasure
}
