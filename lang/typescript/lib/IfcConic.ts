
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcAxis2Placement} from "./IfcAxis2Placement"
import {IfcCircle} from "./IfcCircle"
import {IfcEllipse} from "./IfcEllipse"
import {IfcCurve} from "./IfcCurve"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconic.htm
export abstract class IfcConic extends IfcCurve {
	Position : IfcAxis2Placement

    constructor(position : IfcAxis2Placement) {
        super()

		this.Position = position

    }
}