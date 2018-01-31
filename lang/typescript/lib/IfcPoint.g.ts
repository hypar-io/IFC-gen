
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcPointOnCurve} from "./IfcPointOnCurve.g"
import {IfcPointOnSurface} from "./IfcPointOnSurface.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpoint.htm
export abstract class IfcPoint extends IfcGeometricRepresentationItem {

    constructor() {
        super()

    }
}