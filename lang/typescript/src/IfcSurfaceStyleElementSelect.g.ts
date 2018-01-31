
import {Select} from "./Select"
import {IfcExternallyDefinedSurfaceStyle} from "./IfcExternallyDefinedSurfaceStyle.g"
import {IfcSurfaceStyleLighting} from "./IfcSurfaceStyleLighting.g"
import {IfcSurfaceStyleRefraction} from "./IfcSurfaceStyleRefraction.g"
import {IfcSurfaceStyleShading} from "./IfcSurfaceStyleShading.g"
import {IfcSurfaceStyleWithTextures} from "./IfcSurfaceStyleWithTextures.g"

export class IfcSurfaceStyleElementSelect extends Select {
    value : IfcExternallyDefinedSurfaceStyle|IfcSurfaceStyleLighting|IfcSurfaceStyleRefraction|IfcSurfaceStyleShading|IfcSurfaceStyleWithTextures
}
