
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcReal} from "./IfcReal.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCartesianTransformationOperator} from "./IfcCartesianTransformationOperator.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator3d.htm
 */
export class IfcCartesianTransformationOperator3D extends IfcCartesianTransformationOperator {
	Axis3 : IfcDirection // optional

    get U() : Array<IfcDirection>{throw "Derived property logic has not been implemented for U."} // derived
    set U(value : Array<IfcDirection>){super.U = value}

    constructor(localOrigin : IfcCartesianPoint) {
        super(localOrigin)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Axis1))
		parameters.push(BaseIfc.toStepValue(this.Axis2))
		parameters.push(BaseIfc.toStepValue(this.LocalOrigin))
		parameters.push(BaseIfc.toStepValue(this.Scale))
		parameters.push(BaseIfc.toStepValue(this.Axis3))

        return parameters.join();
    }
}