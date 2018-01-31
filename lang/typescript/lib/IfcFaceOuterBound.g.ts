
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcLoop} from "./IfcLoop.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcFaceBound} from "./IfcFaceBound.g"

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