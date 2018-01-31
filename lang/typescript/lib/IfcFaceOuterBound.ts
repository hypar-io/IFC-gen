
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcLoop} from "./IfcLoop"
import {IfcBoolean} from "./IfcBoolean"
import {IfcFaceBound} from "./IfcFaceBound"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfaceouterbound.htm
export class IfcFaceOuterBound extends IfcFaceBound {

    constructor(bound : IfcLoop, orientation : IfcBoolean) {
        super(bound,orientation)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Bound != null ? this.toStepValue(this.Bound) : "$");
		parameters.push(this.Orientation != null ? this.toStepValue(this.Orientation) : "$");

        return parameters.join();
    }
}