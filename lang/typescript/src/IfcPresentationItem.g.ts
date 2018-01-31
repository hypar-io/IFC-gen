
import {BaseIfc} from "./BaseIfc"
import {IfcColourRgbList} from "./IfcColourRgbList.g"
import {IfcColourSpecification} from "./IfcColourSpecification.g"
import {IfcCurveStyleFont} from "./IfcCurveStyleFont.g"
import {IfcCurveStyleFontAndScaling} from "./IfcCurveStyleFontAndScaling.g"
import {IfcCurveStyleFontPattern} from "./IfcCurveStyleFontPattern.g"
import {IfcIndexedColourMap} from "./IfcIndexedColourMap.g"
import {IfcPreDefinedItem} from "./IfcPreDefinedItem.g"
import {IfcSurfaceStyleLighting} from "./IfcSurfaceStyleLighting.g"
import {IfcSurfaceStyleRefraction} from "./IfcSurfaceStyleRefraction.g"
import {IfcSurfaceStyleShading} from "./IfcSurfaceStyleShading.g"
import {IfcSurfaceStyleWithTextures} from "./IfcSurfaceStyleWithTextures.g"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture.g"
import {IfcTextStyleForDefinedFont} from "./IfcTextStyleForDefinedFont.g"
import {IfcTextStyleTextModel} from "./IfcTextStyleTextModel.g"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate.g"
import {IfcTextureVertex} from "./IfcTextureVertex.g"
import {IfcTextureVertexList} from "./IfcTextureVertexList.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationitem.htm
export abstract class IfcPresentationItem extends BaseIfc {

    constructor() {
        super()

    }
}