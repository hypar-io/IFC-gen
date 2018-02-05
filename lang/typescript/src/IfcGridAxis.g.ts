
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcGrid} from "./IfcGrid.g"
import {IfcVirtualGridIntersection} from "./IfcVirtualGridIntersection.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgridaxis.htm
 */
export class IfcGridAxis extends BaseIfc {
	AxisTag : IfcLabel // optional
	AxisCurve : IfcCurve
	SameSense : IfcBoolean
	PartOfW : Array<IfcGrid> // inverse
	PartOfV : Array<IfcGrid> // inverse
	PartOfU : Array<IfcGrid> // inverse
	HasIntersections : Array<IfcVirtualGridIntersection> // inverse

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
    		parameters.push(BaseIfc.toStepValue(this.AxisTag))
		parameters.push(BaseIfc.toStepValue(this.AxisCurve))
		parameters.push(BaseIfc.toStepValue(this.SameSense))

            return parameters.join();
        }
}