
import {BaseIfc} from "./BaseIfc"
import {IfcColourRgbList} from "./IfcColourRgbList"
import {IfcColourSpecification} from "./IfcColourSpecification"
import {IfcCurveStyleFont} from "./IfcCurveStyleFont"
import {IfcCurveStyleFontAndScaling} from "./IfcCurveStyleFontAndScaling"
import {IfcCurveStyleFontPattern} from "./IfcCurveStyleFontPattern"
import {IfcIndexedColourMap} from "./IfcIndexedColourMap"
import {IfcPreDefinedItem} from "./IfcPreDefinedItem"
import {IfcSurfaceStyleLighting} from "./IfcSurfaceStyleLighting"
import {IfcSurfaceStyleRefraction} from "./IfcSurfaceStyleRefraction"
import {IfcSurfaceStyleShading} from "./IfcSurfaceStyleShading"
import {IfcSurfaceStyleWithTextures} from "./IfcSurfaceStyleWithTextures"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture"
import {IfcTextStyleForDefinedFont} from "./IfcTextStyleForDefinedFont"
import {IfcTextStyleTextModel} from "./IfcTextStyleTextModel"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate"
import {IfcTextureVertex} from "./IfcTextureVertex"
import {IfcTextureVertexList} from "./IfcTextureVertexList"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationitem.htm
export abstract class IfcPresentationItem extends BaseIfc {

    constructor() {
        super()

    }
}