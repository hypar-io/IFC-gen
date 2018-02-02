
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcPoint} from "./IfcPoint.g"
import {IfcVertex} from "./IfcVertex.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertexpoint.htm
 */
export class IfcVertexPoint extends IfcVertex {
	VertexGeometry : IfcPoint

    constructor(vertexGeometry : IfcPoint) {
        super()

		this.VertexGeometry = vertexGeometry

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.VertexGeometry != null ? BaseIfc.toStepValue(this.VertexGeometry) : "$");

        return parameters.join();
    }
}