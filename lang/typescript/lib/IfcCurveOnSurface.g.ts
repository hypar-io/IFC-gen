
import {Select} from "./Select"
import {IfcCompositeCurveOnSurface} from "./IfcCompositeCurveOnSurface.g"
import {IfcPcurve} from "./IfcPcurve.g"
import {IfcSurfaceCurve} from "./IfcSurfaceCurve.g"

export class IfcCurveOnSurface extends Select {
    value : IfcCompositeCurveOnSurface|IfcPcurve|IfcSurfaceCurve
}
