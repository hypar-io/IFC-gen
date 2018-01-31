
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcCartesianPoint} from "./IfcCartesianPoint"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcDirection} from "./IfcDirection"
import {IfcPlacement} from "./IfcPlacement"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaxis2placement3d.htm
export class IfcAxis2Placement3D extends IfcPlacement {
	Axis : IfcDirection// optional
	RefDirection : IfcDirection// optional

    get P() : Array<IfcDirection>{throw "Derived property logic has been implemented for P."} // derived

    constructor(location : IfcCartesianPoint) {
        super(location)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Location != null ? this.toStepValue(this.Location) : "$");
		parameters.push(this.Axis != null ? this.toStepValue(this.Axis) : "$");
		parameters.push(this.RefDirection != null ? this.toStepValue(this.RefDirection) : "$");

        return parameters.join();
    }
}