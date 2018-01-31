
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcReal} from "./IfcReal.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

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