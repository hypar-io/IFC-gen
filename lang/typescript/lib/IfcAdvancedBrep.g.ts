
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcClosedShell} from "./IfcClosedShell"
import {IfcAdvancedBrepWithVoids} from "./IfcAdvancedBrepWithVoids"
import {IfcManifoldSolidBrep} from "./IfcManifoldSolidBrep"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcadvancedbrep.htm
export class IfcAdvancedBrep extends IfcManifoldSolidBrep {

    constructor(outer : IfcClosedShell) {
        super(outer)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Outer != null ? this.toStepValue(this.Outer) : "$");

        return parameters.join();
    }
}