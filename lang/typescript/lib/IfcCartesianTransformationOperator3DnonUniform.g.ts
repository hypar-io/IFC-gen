
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcReal} from "./IfcReal.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCartesianTransformationOperator3D} from "./IfcCartesianTransformationOperator3D.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator3dnonuniform.htm
export class IfcCartesianTransformationOperator3DnonUniform extends IfcCartesianTransformationOperator3D {
	Scale2 : IfcReal// optional
	Scale3 : IfcReal// optional

    get Scl2() : IfcReal{throw "Derived property logic has been implemented for Scl2."} // derived

    get Scl3() : IfcReal{throw "Derived property logic has been implemented for Scl3."} // derived

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
		parameters.push(this.Scale2 != null ? this.toStepValue(this.Scale2) : "$");
		parameters.push(this.Scale3 != null ? this.toStepValue(this.Scale3) : "$");

        return parameters.join();
    }
}