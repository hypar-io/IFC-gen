
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcVertex} from "./IfcVertex.g"
import {IfcEdge} from "./IfcEdge.g"
import {IfcBoolean} from "./IfcBoolean.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorientededge.htm
export class IfcOrientedEdge extends IfcEdge {
	EdgeElement : IfcEdge
	Orientation : IfcBoolean

    get EdgeStart() : IfcVertex{throw "Derived property logic has been implemented for EdgeStart."} // derived

    get EdgeEnd() : IfcVertex{throw "Derived property logic has been implemented for EdgeEnd."} // derived

    constructor(edgeStart : IfcVertex, edgeEnd : IfcVertex, edgeElement : IfcEdge, orientation : IfcBoolean) {
        super(edgeStart,edgeEnd)

		this.EdgeElement = edgeElement
		this.Orientation = orientation

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push("*");
		parameters.push("*");
		parameters.push(this.EdgeElement != null ? this.toStepValue(this.EdgeElement) : "$");
		parameters.push(this.Orientation != null ? this.toStepValue(this.Orientation) : "$");

        return parameters.join();
    }
}