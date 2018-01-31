
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcCartesianPointList2D} from "./IfcCartesianPointList2D"
import {IfcCartesianPointList3D} from "./IfcCartesianPointList3D"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesianpointlist.htm
export abstract class IfcCartesianPointList extends IfcGeometricRepresentationItem {

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor() {
        super()

    }
}