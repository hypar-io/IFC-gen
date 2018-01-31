
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcCartesianPoint} from "./IfcCartesianPoint"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcAxis1Placement} from "./IfcAxis1Placement"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplacement.htm
export abstract class IfcPlacement extends IfcGeometricRepresentationItem {
	Location : IfcCartesianPoint

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(location : IfcCartesianPoint) {
        super()

		this.Location = location

    }
}