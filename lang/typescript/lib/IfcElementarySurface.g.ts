
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcCylindricalSurface} from "./IfcCylindricalSurface"
import {IfcPlane} from "./IfcPlane"
import {IfcSphericalSurface} from "./IfcSphericalSurface"
import {IfcToroidalSurface} from "./IfcToroidalSurface"
import {IfcSurface} from "./IfcSurface"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementarysurface.htm
export abstract class IfcElementarySurface extends IfcSurface {
	Position : IfcAxis2Placement3D

    constructor(position : IfcAxis2Placement3D) {
        super()

		this.Position = position

    }
}