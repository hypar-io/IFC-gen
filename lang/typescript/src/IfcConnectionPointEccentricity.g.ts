
import {BaseIfc} from "./BaseIfc"
import {IfcPoint} from "./IfcPoint.g"
import {IfcVertexPoint} from "./IfcVertexPoint.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcConnectionPointGeometry} from "./IfcConnectionPointGeometry.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionpointeccentricity.htm
 */
export class IfcConnectionPointEccentricity extends IfcConnectionPointGeometry {
	EccentricityInX : IfcLengthMeasure // optional
	EccentricityInY : IfcLengthMeasure // optional
	EccentricityInZ : IfcLengthMeasure // optional

    constructor(pointOnRelatingElement : IfcPoint|IfcVertexPoint) {
        super(pointOnRelatingElement)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.PointOnRelatingElement))
		parameters.push(BaseIfc.toStepValue(this.PointOnRelatedElement))
		parameters.push(BaseIfc.toStepValue(this.EccentricityInX))
		parameters.push(BaseIfc.toStepValue(this.EccentricityInY))
		parameters.push(BaseIfc.toStepValue(this.EccentricityInZ))

        return parameters.join();
    }
}