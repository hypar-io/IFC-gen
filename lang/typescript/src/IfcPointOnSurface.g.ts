
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcPoint} from "./IfcPoint.g"

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