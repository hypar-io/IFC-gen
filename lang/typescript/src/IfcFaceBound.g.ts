
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcLoop} from "./IfcLoop.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcFaceOuterBound} from "./IfcFaceOuterBound.g"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacebound.htm
export class IfcFaceBound extends IfcTopologicalRepresentationItem {
	Bound : IfcLoop
	Orientation : IfcBoolean

    constructor(bound : IfcLoop, orientation : IfcBoolean) {
        super()

		this.Bound = bound
		this.Orientation = orientation

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Bound != null ? this.toStepValue(this.Bound) : "$");
		parameters.push(this.Orientation != null ? this.toStepValue(this.Orientation) : "$");

        return parameters.join();
    }
}