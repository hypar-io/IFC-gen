
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcOrientedEdge} from "./IfcOrientedEdge"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpath.htm
export class IfcPath extends IfcTopologicalRepresentationItem {
	EdgeList : Array<IfcOrientedEdge>

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