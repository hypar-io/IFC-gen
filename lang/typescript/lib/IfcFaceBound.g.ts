
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcLoop} from "./IfcLoop"
import {IfcBoolean} from "./IfcBoolean"
import {IfcFaceOuterBound} from "./IfcFaceOuterBound"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem"

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