
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcVertex} from "./IfcVertex"
import {IfcCurve} from "./IfcCurve"
import {IfcBoolean} from "./IfcBoolean"
import {IfcEdge} from "./IfcEdge"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedgecurve.htm
export class IfcEdgeCurve extends IfcEdge {
	EdgeGeometry : IfcCurve
	SameSense : IfcBoolean

    constructor(edgeStart : IfcVertex, edgeEnd : IfcVertex, edgeGeometry : IfcCurve, sameSense : IfcBoolean) {
        super(edgeStart,edgeEnd)

		this.EdgeGeometry = edgeGeometry
		this.SameSense = sameSense

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.EdgeStart != null ? this.toStepValue(this.EdgeStart) : "$");
		parameters.push(this.EdgeEnd != null ? this.toStepValue(this.EdgeEnd) : "$");
		parameters.push(this.EdgeGeometry != null ? this.toStepValue(this.EdgeGeometry) : "$");
		parameters.push(this.SameSense != null ? this.toStepValue(this.SameSense) : "$");

        return parameters.join();
    }
}