
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcOrientedEdge} from "./IfcOrientedEdge.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcLoop} from "./IfcLoop.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedgeloop.htm
export class IfcEdgeLoop extends IfcLoop {
	EdgeList : Array<IfcOrientedEdge>

    get Ne() : IfcInteger{throw "Derived property logic has been implemented for Ne."} // derived

    constructor(edgeList : Array<IfcOrientedEdge>) {
        super()

		this.EdgeList = edgeList

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.EdgeList != null ? this.toStepValue(this.EdgeList) : "$");

        return parameters.join();
    }
}