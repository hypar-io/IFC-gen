
import {BaseIfc} from "./BaseIfc"
import {IfcCurveOrEdgeCurve} from "./IfcCurveOrEdgeCurve.g"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectioncurvegeometry.htm
export class IfcConnectionCurveGeometry extends IfcConnectionGeometry {
	CurveOnRelatingElement : IfcCurveOrEdgeCurve
	CurveOnRelatedElement : IfcCurveOrEdgeCurve// optional

    constructor(curveOnRelatingElement : IfcCurveOrEdgeCurve) {
        super()

		this.CurveOnRelatingElement = curveOnRelatingElement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.CurveOnRelatingElement != null ? this.toStepValue(this.CurveOnRelatingElement) : "$");
		parameters.push(this.CurveOnRelatedElement != null ? this.toStepValue(this.CurveOnRelatedElement) : "$");

        return parameters.join();
    }
}