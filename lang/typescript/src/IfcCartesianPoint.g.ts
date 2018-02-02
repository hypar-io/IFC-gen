
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcPoint} from "./IfcPoint.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesianpoint.htm
 */
export class IfcCartesianPoint extends IfcPoint {
	Coordinates : Array<IfcLengthMeasure>

    get Dim() : IfcDimensionCount{throw "Derived property logic has not been implemented for Dim."} // derived
    set Dim(value : IfcDimensionCount){super.Dim = value}

    constructor(coordinates : Array<IfcLengthMeasure>) {
        super()

		this.Coordinates = coordinates

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Coordinates != null ? BaseIfc.toStepValue(this.Coordinates) : "$");

        return parameters.join();
    }
}