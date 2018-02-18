
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcVertex} from "./IfcVertex.g"
import {IfcEdge} from "./IfcEdge.g"
import {IfcBoolean} from "./IfcBoolean.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorientededge.htm
 */
export class IfcOrientedEdge extends IfcEdge {
	EdgeElement : IfcEdge
	Orientation : IfcBoolean

    get EdgeStart() : IfcVertex{throw "Derived property logic has not been implemented for EdgeStart."} // derived
    set EdgeStart(value : IfcVertex){super.EdgeStart = value}

    get EdgeEnd() : IfcVertex{throw "Derived property logic has not been implemented for EdgeEnd."} // derived
    set EdgeEnd(value : IfcVertex){super.EdgeEnd = value}

    constructor(edgeStart : IfcVertex, edgeEnd : IfcVertex, edgeElement : IfcEdge, orientation : IfcBoolean) {
        super(edgeStart,edgeEnd)

		this.EdgeElement = edgeElement
		this.Orientation = orientation

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push("*");
		parameters.push("*");
		parameters.push(BaseIfc.toStepValue(this.EdgeElement))
		parameters.push(BaseIfc.toStepValue(this.Orientation))

        return parameters.join();
    }
}