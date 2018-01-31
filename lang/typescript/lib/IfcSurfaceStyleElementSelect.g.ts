
import {Select} from "./Select"
import {IfcExternallyDefinedSurfaceStyle} from "./IfcExternallyDefinedSurfaceStyle"
import {IfcSurfaceStyleLighting} from "./IfcSurfaceStyleLighting"
import {IfcSurfaceStyleRefraction} from "./IfcSurfaceStyleRefraction"
import {IfcSurfaceStyleShading} from "./IfcSurfaceStyleShading"
import {IfcSurfaceStyleWithTextures} from "./IfcSurfaceStyleWithTextures"

export class IfcSurfaceStyleElementSelect extends Select {
    value : IfcExternallyDefinedSurfaceStyle|IfcSurfaceStyleLighting|IfcSurfaceStyleRefraction|IfcSurfaceStyleShading|IfcSurfaceStyleWithTextures
}
