
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcOrientedEdge} from "./IfcOrientedEdge"
import {IfcInteger} from "./IfcInteger"
import {IfcLoop} from "./IfcLoop"

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