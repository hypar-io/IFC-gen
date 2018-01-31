
import {Select} from "./Select"
import {IfcFaceBasedSurfaceModel} from "./IfcFaceBasedSurfaceModel"
import {IfcFaceSurface} from "./IfcFaceSurface"
import {IfcSurface} from "./IfcSurface"

export class IfcSurfaceOrFaceSurface extends Select {
    value : IfcFaceBasedSurfaceModel|IfcFaceSurface|IfcSurface
}
