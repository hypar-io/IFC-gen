
import {Select} from "./Select"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.g"

export class IfcBendingParameterSelect extends Select {
    value : IfcLengthMeasure|IfcPlaneAngleMeasure
}
