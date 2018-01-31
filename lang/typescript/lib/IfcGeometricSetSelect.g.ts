
import {Select} from "./Select"
import {IfcCurve} from "./IfcCurve"
import {IfcPoint} from "./IfcPoint"
import {IfcSurface} from "./IfcSurface"

export class IfcGeometricSetSelect extends Select {
    value : IfcCurve|IfcPoint|IfcSurface
}
