
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcBSplineSurface} from "./IfcBSplineSurface"
import {IfcCurveBoundedPlane} from "./IfcCurveBoundedPlane"
import {IfcCurveBoundedSurface} from "./IfcCurveBoundedSurface"
import {IfcRectangularTrimmedSurface} from "./IfcRectangularTrimmedSurface"
import {IfcSurface} from "./IfcSurface"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundedsurface.htm
export abstract class IfcBoundedSurface extends IfcSurface {

    constructor() {
        super()

    }
}