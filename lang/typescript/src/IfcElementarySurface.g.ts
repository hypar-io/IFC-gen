
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcCylindricalSurface} from "./IfcCylindricalSurface.g"
import {IfcPlane} from "./IfcPlane.g"
import {IfcSphericalSurface} from "./IfcSphericalSurface.g"
import {IfcToroidalSurface} from "./IfcToroidalSurface.g"
import {IfcSurface} from "./IfcSurface.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementarysurface.htm
export abstract class IfcElementarySurface extends IfcSurface {
	Position : IfcAxis2Placement3D

    constructor(position : IfcAxis2Placement3D) {
        super()

		this.Position = position

    }
}