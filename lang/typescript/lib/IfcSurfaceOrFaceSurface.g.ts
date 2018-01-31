
import {Select} from "./Select"
import {IfcFaceBasedSurfaceModel} from "./IfcFaceBasedSurfaceModel.g"
import {IfcFaceSurface} from "./IfcFaceSurface.g"
import {IfcSurface} from "./IfcSurface.g"

export class IfcSurfaceOrFaceSurface extends Select {
    value : IfcFaceBasedSurfaceModel|IfcFaceSurface|IfcSurface
}
