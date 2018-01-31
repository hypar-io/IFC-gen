
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcCurve} from "./IfcCurve"
import {IfcBoolean} from "./IfcBoolean"
import {IfcGrid} from "./IfcGrid"
import {IfcVirtualGridIntersection} from "./IfcVirtualGridIntersection"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgridaxis.htm
export class IfcGridAxis extends BaseIfc {
	AxisTag : IfcLabel// optional
	AxisCurve : IfcCurve
	SameSense : IfcBoolean
	PartOfW : Array<IfcGrid>// inverse
	PartOfV : Array<IfcGrid>// inverse
	PartOfU : Array<IfcGrid>// inverse
	HasIntersections : Array<IfcVirtualGridIntersection>// inverse

    constructor(axisCurve : IfcCurve, sameSense : IfcBoolean) {
        super()
		this.PartOfW = new Array<IfcGrid>()
		this.PartOfV = new Array<IfcGrid>()
		this.PartOfU = new Array<IfcGrid>()
		this.HasIntersections = new Array<IfcVirtualGridIntersection>()

		this.AxisCurve = axisCurve
		this.SameSense = sameSense

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.AxisTag != null ? this.toStepValue(this.AxisTag) : "$");
		parameters.push(this.AxisCurve != null ? this.toStepValue(this.AxisCurve) : "$");
		parameters.push(this.SameSense != null ? this.toStepValue(this.SameSense) : "$");

        return parameters.join();
    }
}