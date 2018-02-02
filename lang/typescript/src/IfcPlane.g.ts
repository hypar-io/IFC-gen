
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcElementarySurface} from "./IfcElementarySurface.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplane.htm
 */
export class IfcPlane extends IfcElementarySurface {

    constructor(position : IfcAxis2Placement3D) {
        super(position)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Position != null ? BaseIfc.toStepValue(this.Position) : "$");

        return parameters.join();
    }
}