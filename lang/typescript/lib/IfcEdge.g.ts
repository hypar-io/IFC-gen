
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcVertex} from "./IfcVertex"
import {IfcEdgeCurve} from "./IfcEdgeCurve"
import {IfcOrientedEdge} from "./IfcOrientedEdge"
import {IfcSubedge} from "./IfcSubedge"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedge.htm
export class IfcEdge extends IfcTopologicalRepresentationItem {
	EdgeStart : IfcVertex
	EdgeEnd : IfcVertex

    constructor(edgeStart : IfcVertex, edgeEnd : IfcVertex) {
        super()

		this.EdgeStart = edgeStart
		this.EdgeEnd = edgeEnd

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.EdgeStart != null ? this.toStepValue(this.EdgeStart) : "$");
		parameters.push(this.EdgeEnd != null ? this.toStepValue(this.EdgeEnd) : "$");

        return parameters.join();
    }
}