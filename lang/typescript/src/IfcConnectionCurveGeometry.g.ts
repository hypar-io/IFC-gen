
import {BaseIfc} from "./BaseIfc"
import {IfcBoundedCurve} from "./IfcBoundedCurve.g"
import {IfcEdgeCurve} from "./IfcEdgeCurve.g"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectioncurvegeometry.htm
 */
export class IfcConnectionCurveGeometry extends IfcConnectionGeometry {
	CurveOnRelatingElement : IfcBoundedCurve|IfcEdgeCurve
	CurveOnRelatedElement : IfcBoundedCurve|IfcEdgeCurve // optional

    constructor(curveOnRelatingElement : IfcBoundedCurve|IfcEdgeCurve) {
        super()

		this.CurveOnRelatingElement = curveOnRelatingElement

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.CurveOnRelatingElement))
		parameters.push(BaseIfc.toStepValue(this.CurveOnRelatedElement))

            return parameters.join();
        }
}