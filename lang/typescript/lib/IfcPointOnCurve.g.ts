
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcPoint} from "./IfcPoint.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpointoncurve.htm
export class IfcPointOnCurve extends IfcPoint {
	BasisCurve : IfcCurve
	PointParameter : IfcParameterValue

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(basisCurve : IfcCurve, pointParameter : IfcParameterValue) {
        super()

		this.BasisCurve = basisCurve
		this.PointParameter = pointParameter

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.BasisCurve != null ? this.toStepValue(this.BasisCurve) : "$");
		parameters.push(this.PointParameter != null ? this.toStepValue(this.PointParameter) : "$");

        return parameters.join();
    }
}