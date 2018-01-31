
import {Select} from "./Select"
import {IfcBoundedCurve} from "./IfcBoundedCurve.g"
import {IfcEdgeCurve} from "./IfcEdgeCurve.g"

export class IfcCurveOrEdgeCurve extends Select {
    value : IfcBoundedCurve|IfcEdgeCurve
}
