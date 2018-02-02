
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcPlacement} from "./IfcPlacement.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaxis1placement.htm
 */
export class IfcAxis1Placement extends IfcPlacement {
	Axis : IfcDirection // optional

    get Z() : IfcDirection{throw "Derived property logic has not been implemented for Z."} // derived
    set Z(value : IfcDirection){super.Z = value}

    constructor(location : IfcCartesianPoint) {
        super(location)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Location != null ? BaseIfc.toStepValue(this.Location) : "$");
		parameters.push(this.Axis != null ? BaseIfc.toStepValue(this.Axis) : "$");

        return parameters.join();
    }
}