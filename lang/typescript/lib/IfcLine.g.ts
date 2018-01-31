
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcCartesianPoint} from "./IfcCartesianPoint"
import {IfcVector} from "./IfcVector"
import {IfcCurve} from "./IfcCurve"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcline.htm
export class IfcLine extends IfcCurve {
	Pnt : IfcCartesianPoint
	Dir : IfcVector

    constructor(pnt : IfcCartesianPoint, dir : IfcVector) {
        super()

		this.Pnt = pnt
		this.Dir = dir

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Pnt != null ? this.toStepValue(this.Pnt) : "$");
		parameters.push(this.Dir != null ? this.toStepValue(this.Dir) : "$");

        return parameters.join();
    }
}