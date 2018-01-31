
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcVertex} from "./IfcVertex"
import {IfcLoop} from "./IfcLoop"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertexloop.htm
export class IfcVertexLoop extends IfcLoop {
	LoopVertex : IfcVertex

    constructor(loopVertex : IfcVertex) {
        super()

		this.LoopVertex = loopVertex

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.LoopVertex != null ? this.toStepValue(this.LoopVertex) : "$");

        return parameters.join();
    }
}