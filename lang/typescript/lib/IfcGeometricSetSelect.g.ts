
import {Select} from "./Select"
import {IfcCurve} from "./IfcCurve.g"
import {IfcPoint} from "./IfcPoint.g"
import {IfcSurface} from "./IfcSurface.g"

export class IfcGeometricSetSelect extends Select {
    value : IfcCurve|IfcPoint|IfcSurface
}
