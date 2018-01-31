
import {Select} from "./Select"
import {IfcCompositeCurveOnSurface} from "./IfcCompositeCurveOnSurface"
import {IfcPcurve} from "./IfcPcurve"
import {IfcSurfaceCurve} from "./IfcSurfaceCurve"

export class IfcCurveOnSurface extends Select {
    value : IfcCompositeCurveOnSurface|IfcPcurve|IfcSurfaceCurve
}
