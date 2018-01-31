
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcCartesianPoint} from "./IfcCartesianPoint"
import {IfcBoundedCurve} from "./IfcBoundedCurve"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolyline.htm
export class IfcPolyline extends IfcBoundedCurve {
	Points : Array<IfcCartesianPoint>

    constructor(points : Array<IfcCartesianPoint>) {
        super()

		this.Points = points

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Points != null ? this.toStepValue(this.Points) : "$");

        return parameters.join();
    }
}