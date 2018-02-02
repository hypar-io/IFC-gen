
import {BaseIfc} from "./BaseIfc"
import {IfcGridAxis} from "./IfcGridAxis.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvirtualgridintersection.htm
 */
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
		parameters.push(this.IntersectingAxes != null ? BaseIfc.toStepValue(this.IntersectingAxes) : "$");
		parameters.push(this.OffsetDistances != null ? BaseIfc.toStepValue(this.OffsetDistances) : "$");

        return parameters.join();
    }
}