
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcVertex} from "./IfcVertex.g"
import {IfcLoop} from "./IfcLoop.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertexloop.htm
 */
export class IfcVertexLoop extends IfcLoop {
	LoopVertex : IfcVertex

    constructor(loopVertex : IfcVertex) {
        super()

		this.LoopVertex = loopVertex

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.LoopVertex))

        return parameters.join();
    }
}