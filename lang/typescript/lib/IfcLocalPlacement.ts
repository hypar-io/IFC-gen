
import {BaseIfc} from "./BaseIfc"
import {IfcProduct} from "./IfcProduct"
import {IfcObjectPlacement} from "./IfcObjectPlacement"
import {IfcAxis2Placement} from "./IfcAxis2Placement"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclocalplacement.htm
export class IfcLocalPlacement extends IfcObjectPlacement {
	PlacementRelTo : IfcObjectPlacement// optional
	RelativePlacement : IfcAxis2Placement

    constructor(relativePlacement : IfcAxis2Placement) {
        super()

		this.RelativePlacement = relativePlacement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.PlacementRelTo != null ? this.toStepValue(this.PlacementRelTo) : "$");
		parameters.push(this.RelativePlacement != null ? this.toStepValue(this.RelativePlacement) : "$");

        return parameters.join();
    }
}