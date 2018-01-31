
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcAnnotationFillArea} from "./IfcAnnotationFillArea.g"
import {IfcBooleanResult} from "./IfcBooleanResult.g"
import {IfcBoundingBox} from "./IfcBoundingBox.g"
import {IfcCartesianPointList} from "./IfcCartesianPointList.g"
import {IfcCartesianTransformationOperator} from "./IfcCartesianTransformationOperator.g"
import {IfcCompositeCurveSegment} from "./IfcCompositeCurveSegment.g"
import {IfcCsgPrimitive3D} from "./IfcCsgPrimitive3D.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcFaceBasedSurfaceModel} from "./IfcFaceBasedSurfaceModel.g"
import {IfcFillAreaStyleHatching} from "./IfcFillAreaStyleHatching.g"
import {IfcFillAreaStyleTiles} from "./IfcFillAreaStyleTiles.g"
import {IfcGeometricSet} from "./IfcGeometricSet.g"
import {IfcHalfSpaceSolid} from "./IfcHalfSpaceSolid.g"
import {IfcLightSource} from "./IfcLightSource.g"
import {IfcPlacement} from "./IfcPlacement.g"
import {IfcPlanarExtent} from "./IfcPlanarExtent.g"
import {IfcPoint} from "./IfcPoint.g"
import {IfcSectionedSpine} from "./IfcSectionedSpine.g"
import {IfcShellBasedSurfaceModel} from "./IfcShellBasedSurfaceModel.g"
import {IfcSolidModel} from "./IfcSolidModel.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcTessellatedItem} from "./IfcTessellatedItem.g"
import {IfcTextLiteral} from "./IfcTextLiteral.g"
import {IfcVector} from "./IfcVector.g"
import {IfcRepresentationItem} from "./IfcRepresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricrepresentationitem.htm
export abstract class IfcGeometricRepresentationItem extends IfcRepresentationItem {

    constructor() {
        super()

    }
}