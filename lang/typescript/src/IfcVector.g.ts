
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvector.htm
export class IfcVector extends IfcGeometricRepresentationItem {
	Orientation : IfcDirection
	Magnitude : IfcLengthMeasure

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(orientation : IfcDirection, magnitude : IfcLengthMeasure) {
        super()

		this.Orientation = orientation
		this.Magnitude = magnitude

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Orientation != null ? this.toStepValue(this.Orientation) : "$");
		parameters.push(this.Magnitude != null ? this.toStepValue(this.Magnitude) : "$");

        return parameters.join();
    }
}