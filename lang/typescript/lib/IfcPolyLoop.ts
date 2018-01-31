
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcCartesianPoint} from "./IfcCartesianPoint"
import {IfcLoop} from "./IfcLoop"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolyloop.htm
export class IfcPolyLoop extends IfcLoop {
	Polygon : Array<IfcCartesianPoint>

    constructor(polygon : Array<IfcCartesianPoint>) {
        super()

		this.Polygon = polygon

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Polygon != null ? this.toStepValue(this.Polygon) : "$");

        return parameters.join();
    }
}