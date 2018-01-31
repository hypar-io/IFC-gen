
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcVertex} from "./IfcVertex.g"
import {IfcEdgeCurve} from "./IfcEdgeCurve.g"
import {IfcOrientedEdge} from "./IfcOrientedEdge.g"
import {IfcSubedge} from "./IfcSubedge.g"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem.g"

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