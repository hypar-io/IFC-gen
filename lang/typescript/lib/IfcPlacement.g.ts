
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcAxis1Placement} from "./IfcAxis1Placement.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplacement.htm
export abstract class IfcPlacement extends IfcGeometricRepresentationItem {
	Location : IfcCartesianPoint

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(location : IfcCartesianPoint) {
        super()

		this.Location = location

    }
}