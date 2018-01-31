
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcBlock} from "./IfcBlock"
import {IfcRectangularPyramid} from "./IfcRectangularPyramid"
import {IfcRightCircularCone} from "./IfcRightCircularCone"
import {IfcRightCircularCylinder} from "./IfcRightCircularCylinder"
import {IfcSphere} from "./IfcSphere"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccsgprimitive3d.htm
export abstract class IfcCsgPrimitive3D extends IfcGeometricRepresentationItem {
	Position : IfcAxis2Placement3D

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(position : IfcAxis2Placement3D) {
        super()

		this.Position = position

    }
}