
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcPoint} from "./IfcPoint"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesianpoint.htm
export class IfcCartesianPoint extends IfcPoint {
	Coordinates : Array<IfcLengthMeasure>

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(coordinates : Array<IfcLengthMeasure>) {
        super()

		this.Coordinates = coordinates

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Coordinates != null ? this.toStepValue(this.Coordinates) : "$");

        return parameters.join();
    }
}