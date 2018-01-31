
import {BaseIfc} from "./BaseIfc"
import {IfcPointOrVertexPoint} from "./IfcPointOrVertexPoint"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcConnectionPointGeometry} from "./IfcConnectionPointGeometry"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionpointeccentricity.htm
export class IfcConnectionPointEccentricity extends IfcConnectionPointGeometry {
	EccentricityInX : IfcLengthMeasure// optional
	EccentricityInY : IfcLengthMeasure// optional
	EccentricityInZ : IfcLengthMeasure// optional

    constructor(pointOnRelatingElement : IfcPointOrVertexPoint) {
        super(pointOnRelatingElement)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.PointOnRelatingElement != null ? this.toStepValue(this.PointOnRelatingElement) : "$");
		parameters.push(this.PointOnRelatedElement != null ? this.toStepValue(this.PointOnRelatedElement) : "$");
		parameters.push(this.EccentricityInX != null ? this.toStepValue(this.EccentricityInX) : "$");
		parameters.push(this.EccentricityInY != null ? this.toStepValue(this.EccentricityInY) : "$");
		parameters.push(this.EccentricityInZ != null ? this.toStepValue(this.EccentricityInZ) : "$");

        return parameters.join();
    }
}