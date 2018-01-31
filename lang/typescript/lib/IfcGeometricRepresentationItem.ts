
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcAnnotationFillArea} from "./IfcAnnotationFillArea"
import {IfcBooleanResult} from "./IfcBooleanResult"
import {IfcBoundingBox} from "./IfcBoundingBox"
import {IfcCartesianPointList} from "./IfcCartesianPointList"
import {IfcCartesianTransformationOperator} from "./IfcCartesianTransformationOperator"
import {IfcCompositeCurveSegment} from "./IfcCompositeCurveSegment"
import {IfcCsgPrimitive3D} from "./IfcCsgPrimitive3D"
import {IfcCurve} from "./IfcCurve"
import {IfcDirection} from "./IfcDirection"
import {IfcFaceBasedSurfaceModel} from "./IfcFaceBasedSurfaceModel"
import {IfcFillAreaStyleHatching} from "./IfcFillAreaStyleHatching"
import {IfcFillAreaStyleTiles} from "./IfcFillAreaStyleTiles"
import {IfcGeometricSet} from "./IfcGeometricSet"
import {IfcHalfSpaceSolid} from "./IfcHalfSpaceSolid"
import {IfcLightSource} from "./IfcLightSource"
import {IfcPlacement} from "./IfcPlacement"
import {IfcPlanarExtent} from "./IfcPlanarExtent"
import {IfcPoint} from "./IfcPoint"
import {IfcSectionedSpine} from "./IfcSectionedSpine"
import {IfcShellBasedSurfaceModel} from "./IfcShellBasedSurfaceModel"
import {IfcSolidModel} from "./IfcSolidModel"
import {IfcSurface} from "./IfcSurface"
import {IfcTessellatedItem} from "./IfcTessellatedItem"
import {IfcTextLiteral} from "./IfcTextLiteral"
import {IfcVector} from "./IfcVector"
import {IfcRepresentationItem} from "./IfcRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricrepresentationitem.htm
export abstract class IfcGeometricRepresentationItem extends IfcRepresentationItem {

    constructor() {
        super()

    }
}