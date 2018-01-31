
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcReal} from "./IfcReal"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdirection.htm
export class IfcDirection extends IfcGeometricRepresentationItem {
	DirectionRatios : Array<IfcReal>

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(directionRatios : Array<IfcReal>) {
        super()

		this.DirectionRatios = directionRatios

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.DirectionRatios != null ? this.toStepValue(this.DirectionRatios) : "$");

        return parameters.join();
    }
}