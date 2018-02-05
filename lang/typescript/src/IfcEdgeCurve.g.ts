
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcVertex} from "./IfcVertex.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcEdge} from "./IfcEdge.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedgecurve.htm
 */
export class IfcEdgeCurve extends IfcEdge {
	EdgeGeometry : IfcCurve
	SameSense : IfcBoolean

    constructor(edgeStart : IfcVertex, edgeEnd : IfcVertex, edgeGeometry : IfcCurve, sameSense : IfcBoolean) {
        super(edgeStart,edgeEnd)

		this.EdgeGeometry = edgeGeometry
		this.SameSense = sameSense

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.EdgeStart))
		parameters.push(BaseIfc.toStepValue(this.EdgeEnd))
		parameters.push(BaseIfc.toStepValue(this.EdgeGeometry))
		parameters.push(BaseIfc.toStepValue(this.SameSense))

            return parameters.join();
        }
}