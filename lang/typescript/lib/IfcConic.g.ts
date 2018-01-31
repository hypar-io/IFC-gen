
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcAxis2Placement} from "./IfcAxis2Placement.g"
import {IfcCircle} from "./IfcCircle.g"
import {IfcEllipse} from "./IfcEllipse.g"
import {IfcCurve} from "./IfcCurve.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconic.htm
export abstract class IfcConic extends IfcCurve {
	Position : IfcAxis2Placement

    constructor(position : IfcAxis2Placement) {
        super()

		this.Position = position

    }
}