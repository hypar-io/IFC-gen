
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcClosedShell} from "./IfcClosedShell.g"
import {IfcManifoldSolidBrep} from "./IfcManifoldSolidBrep.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcadvancedbrep.htm
 */
export class IfcAdvancedBrep extends IfcManifoldSolidBrep {

    constructor(outer : IfcClosedShell) {
        super(outer)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Outer != null ? BaseIfc.toStepValue(this.Outer) : "$");

        return parameters.join();
    }
}