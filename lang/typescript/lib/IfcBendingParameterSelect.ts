
import {Select} from "./Select"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure"

export class IfcBendingParameterSelect extends Select {
    value : IfcLengthMeasure|IfcPlaneAngleMeasure
}
