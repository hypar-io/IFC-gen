
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcBoundedCurve} from "./IfcBoundedCurve.g"
import {IfcConic} from "./IfcConic.g"
import {IfcLine} from "./IfcLine.g"
import {IfcOffsetCurve2D} from "./IfcOffsetCurve2D.g"
import {IfcOffsetCurve3D} from "./IfcOffsetCurve3D.g"
import {IfcPcurve} from "./IfcPcurve.g"
import {IfcSurfaceCurve} from "./IfcSurfaceCurve.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurve.htm
export abstract class IfcCurve extends IfcGeometricRepresentationItem {

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor() {
        super()

    }
}