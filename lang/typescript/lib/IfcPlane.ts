
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcElementarySurface} from "./IfcElementarySurface"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplane.htm
export class IfcPlane extends IfcElementarySurface {

    constructor(position : IfcAxis2Placement3D) {
        super(position)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");

        return parameters.join();
    }
}