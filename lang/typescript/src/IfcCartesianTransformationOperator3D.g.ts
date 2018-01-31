
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcReal} from "./IfcReal.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCartesianTransformationOperator3DnonUniform} from "./IfcCartesianTransformationOperator3DnonUniform.g"
import {IfcCartesianTransformationOperator} from "./IfcCartesianTransformationOperator.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator3d.htm
export class IfcCartesianTransformationOperator3D extends IfcCartesianTransformationOperator {
	Axis3 : IfcDirection// optional

    get U() : Array<IfcDirection>{throw "Derived property logic has been implemented for U."} // derived

    constructor(localOrigin : IfcCartesianPoint) {
        super(localOrigin)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Axis1 != null ? this.toStepValue(this.Axis1) : "$");
		parameters.push(this.Axis2 != null ? this.toStepValue(this.Axis2) : "$");
		parameters.push(this.LocalOrigin != null ? this.toStepValue(this.LocalOrigin) : "$");
		parameters.push(this.Scale != null ? this.toStepValue(this.Scale) : "$");
		parameters.push(this.Axis3 != null ? this.toStepValue(this.Axis3) : "$");

        return parameters.join();
    }
}