
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcVertex} from "./IfcVertex"
import {IfcEdge} from "./IfcEdge"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsubedge.htm
export class IfcSubedge extends IfcEdge {
	ParentEdge : IfcEdge

    constructor(edgeStart : IfcVertex, edgeEnd : IfcVertex, parentEdge : IfcEdge) {
        super(edgeStart,edgeEnd)

		this.ParentEdge = parentEdge

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.EdgeStart != null ? this.toStepValue(this.EdgeStart) : "$");
		parameters.push(this.EdgeEnd != null ? this.toStepValue(this.EdgeEnd) : "$");
		parameters.push(this.ParentEdge != null ? this.toStepValue(this.ParentEdge) : "$");

        return parameters.join();
    }
}