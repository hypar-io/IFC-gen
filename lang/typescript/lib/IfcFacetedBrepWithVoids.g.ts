
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcClosedShell} from "./IfcClosedShell"
import {IfcFacetedBrep} from "./IfcFacetedBrep"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacetedbrepwithvoids.htm
export class IfcFacetedBrepWithVoids extends IfcFacetedBrep {
	Voids : Array<IfcClosedShell>

    constructor(outer : IfcClosedShell, voids : Array<IfcClosedShell>) {
        super(outer)

		this.Voids = voids

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Outer != null ? this.toStepValue(this.Outer) : "$");
		parameters.push(this.Voids != null ? this.toStepValue(this.Voids) : "$");

        return parameters.join();
    }
}