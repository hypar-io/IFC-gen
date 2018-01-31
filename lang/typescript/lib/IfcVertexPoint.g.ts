
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcPoint} from "./IfcPoint"
import {IfcVertex} from "./IfcVertex"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertexpoint.htm
export class IfcVertexPoint extends IfcVertex {
	VertexGeometry : IfcPoint

    constructor(vertexGeometry : IfcPoint) {
        super()

		this.VertexGeometry = vertexGeometry

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.VertexGeometry != null ? this.toStepValue(this.VertexGeometry) : "$");

        return parameters.join();
    }
}