
import {BaseIfc} from "./BaseIfc"
import {IfcPointOrVertexPoint} from "./IfcPointOrVertexPoint.g"
import {IfcConnectionPointEccentricity} from "./IfcConnectionPointEccentricity.g"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionpointgeometry.htm
export class IfcConnectionPointGeometry extends IfcConnectionGeometry {
	PointOnRelatingElement : IfcPointOrVertexPoint
	PointOnRelatedElement : IfcPointOrVertexPoint// optional

    constructor(pointOnRelatingElement : IfcPointOrVertexPoint) {
        super()

		this.PointOnRelatingElement = pointOnRelatingElement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.PointOnRelatingElement != null ? this.toStepValue(this.PointOnRelatingElement) : "$");
		parameters.push(this.PointOnRelatedElement != null ? this.toStepValue(this.PointOnRelatedElement) : "$");

        return parameters.join();
    }
}