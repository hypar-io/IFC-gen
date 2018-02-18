
import {BaseIfc} from "./BaseIfc"
import {IfcPoint} from "./IfcPoint.g"
import {IfcVertexPoint} from "./IfcVertexPoint.g"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionpointgeometry.htm
 */
export class IfcConnectionPointGeometry extends IfcConnectionGeometry {
	PointOnRelatingElement : IfcPoint|IfcVertexPoint
	PointOnRelatedElement : IfcPoint|IfcVertexPoint // optional

    constructor(pointOnRelatingElement : IfcPoint|IfcVertexPoint) {
        super()

		this.PointOnRelatingElement = pointOnRelatingElement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.PointOnRelatingElement))
		parameters.push(BaseIfc.toStepValue(this.PointOnRelatedElement))

        return parameters.join();
    }
}