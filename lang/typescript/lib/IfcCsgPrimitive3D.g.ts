
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcBlock} from "./IfcBlock.g"
import {IfcRectangularPyramid} from "./IfcRectangularPyramid.g"
import {IfcRightCircularCone} from "./IfcRightCircularCone.g"
import {IfcRightCircularCylinder} from "./IfcRightCircularCylinder.g"
import {IfcSphere} from "./IfcSphere.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccsgprimitive3d.htm
export abstract class IfcCsgPrimitive3D extends IfcGeometricRepresentationItem {
	Position : IfcAxis2Placement3D

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(position : IfcAxis2Placement3D) {
        super()

		this.Position = position

    }
}