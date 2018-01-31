
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcBSplineSurface} from "./IfcBSplineSurface.g"
import {IfcCurveBoundedPlane} from "./IfcCurveBoundedPlane.g"
import {IfcCurveBoundedSurface} from "./IfcCurveBoundedSurface.g"
import {IfcRectangularTrimmedSurface} from "./IfcRectangularTrimmedSurface.g"
import {IfcSurface} from "./IfcSurface.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundedsurface.htm
export abstract class IfcBoundedSurface extends IfcSurface {

    constructor() {
        super()

    }
}