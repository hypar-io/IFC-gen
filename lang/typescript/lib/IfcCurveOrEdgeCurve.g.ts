
import {Select} from "./Select"
import {IfcBoundedCurve} from "./IfcBoundedCurve"
import {IfcEdgeCurve} from "./IfcEdgeCurve"

export class IfcCurveOrEdgeCurve extends Select {
    value : IfcBoundedCurve|IfcEdgeCurve
}
