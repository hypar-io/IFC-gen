
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcVertex} from "./IfcVertex.g"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedge.htm
 */
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
		parameters.push(BaseIfc.toStepValue(this.EdgeStart))
		parameters.push(BaseIfc.toStepValue(this.EdgeEnd))

        return parameters.join();
    }
}