
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcPoint} from "./IfcPoint.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpointonsurface.htm
 */
export class IfcPointOnSurface extends IfcPoint {
	BasisSurface : IfcSurface
	PointParameterU : IfcParameterValue
	PointParameterV : IfcParameterValue

    get Dim() : IfcDimensionCount{throw "Derived property logic has not been implemented for Dim."} // derived
    set Dim(value : IfcDimensionCount){super.Dim = value}

    constructor(basisSurface : IfcSurface, pointParameterU : IfcParameterValue, pointParameterV : IfcParameterValue) {
        super()

		this.BasisSurface = basisSurface
		this.PointParameterU = pointParameterU
		this.PointParameterV = pointParameterV

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.BasisSurface))
		parameters.push(BaseIfc.toStepValue(this.PointParameterU))
		parameters.push(BaseIfc.toStepValue(this.PointParameterV))

            return parameters.join();
        }
}