
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcPlacement} from "./IfcPlacement.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaxis2placement2d.htm
 */
export class IfcAxis2Placement2D extends IfcPlacement {
	RefDirection : IfcDirection // optional

    get P() : Array<IfcDirection>{throw "Derived property logic has not been implemented for P."} // derived
    set P(value : Array<IfcDirection>){super.P = value}

    constructor(location : IfcCartesianPoint) {
        super(location)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Location != null ? BaseIfc.toStepValue(this.Location) : "$");
		parameters.push(this.RefDirection != null ? BaseIfc.toStepValue(this.RefDirection) : "$");

        return parameters.join();
    }
}