
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcLoop} from "./IfcLoop.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolyloop.htm
 */
export class IfcPolyLoop extends IfcLoop {
	Polygon : Array<IfcCartesianPoint>

    constructor(polygon : Array<IfcCartesianPoint>) {
        super()

		this.Polygon = polygon

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Polygon != null ? BaseIfc.toStepValue(this.Polygon) : "$");

        return parameters.join();
    }
}