
import {BaseIfc} from "./BaseIfc"
import {IfcGridAxis} from "./IfcGridAxis"
import {IfcLengthMeasure} from "./IfcLengthMeasure"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvirtualgridintersection.htm
export class IfcVirtualGridIntersection extends BaseIfc {
	IntersectingAxes : Array<IfcGridAxis>
	OffsetDistances : Array<IfcLengthMeasure>

    constructor(intersectingAxes : Array<IfcGridAxis>, offsetDistances : Array<IfcLengthMeasure>) {
        super()

		this.IntersectingAxes = intersectingAxes
		this.OffsetDistances = offsetDistances

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.IntersectingAxes != null ? this.toStepValue(this.IntersectingAxes) : "$");
		parameters.push(this.OffsetDistances != null ? this.toStepValue(this.OffsetDistances) : "$");

        return parameters.join();
    }
}