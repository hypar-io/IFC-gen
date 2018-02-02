
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcClosedShell} from "./IfcClosedShell.g"
import {IfcFacetedBrep} from "./IfcFacetedBrep.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacetedbrepwithvoids.htm
 */
export class IfcFacetedBrepWithVoids extends IfcFacetedBrep {
	Voids : Array<IfcClosedShell>

    constructor(outer : IfcClosedShell, voids : Array<IfcClosedShell>) {
        super(outer)

		this.Voids = voids

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Outer != null ? BaseIfc.toStepValue(this.Outer) : "$");
		parameters.push(this.Voids != null ? BaseIfc.toStepValue(this.Voids) : "$");

        return parameters.join();
    }
}