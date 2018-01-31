
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcSurface} from "./IfcSurface"
import {IfcParameterValue} from "./IfcParameterValue"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcPoint} from "./IfcPoint"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpointonsurface.htm
export class IfcPointOnSurface extends IfcPoint {
	BasisSurface : IfcSurface
	PointParameterU : IfcParameterValue
	PointParameterV : IfcParameterValue

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(basisSurface : IfcSurface, pointParameterU : IfcParameterValue, pointParameterV : IfcParameterValue) {
        super()

		this.BasisSurface = basisSurface
		this.PointParameterU = pointParameterU
		this.PointParameterV = pointParameterV

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.BasisSurface != null ? this.toStepValue(this.BasisSurface) : "$");
		parameters.push(this.PointParameterU != null ? this.toStepValue(this.PointParameterU) : "$");
		parameters.push(this.PointParameterV != null ? this.toStepValue(this.PointParameterV) : "$");

        return parameters.join();
    }
}