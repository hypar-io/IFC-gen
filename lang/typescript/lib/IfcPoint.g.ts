
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcCartesianPoint} from "./IfcCartesianPoint"
import {IfcPointOnCurve} from "./IfcPointOnCurve"
import {IfcPointOnSurface} from "./IfcPointOnSurface"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpoint.htm
export abstract class IfcPoint extends IfcGeometricRepresentationItem {

    constructor() {
        super()

    }
}