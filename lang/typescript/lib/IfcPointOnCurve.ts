
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcCurve} from "./IfcCurve"
import {IfcParameterValue} from "./IfcParameterValue"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcPoint} from "./IfcPoint"

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