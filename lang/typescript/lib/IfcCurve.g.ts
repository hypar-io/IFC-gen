
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcBoundedCurve} from "./IfcBoundedCurve"
import {IfcConic} from "./IfcConic"
import {IfcLine} from "./IfcLine"
import {IfcOffsetCurve2D} from "./IfcOffsetCurve2D"
import {IfcOffsetCurve3D} from "./IfcOffsetCurve3D"
import {IfcPcurve} from "./IfcPcurve"
import {IfcSurfaceCurve} from "./IfcSurfaceCurve"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurve.htm
export abstract class IfcCurve extends IfcGeometricRepresentationItem {

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor() {
        super()

    }
}