
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcReal} from "./IfcReal.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCartesianTransformationOperator3D} from "./IfcCartesianTransformationOperator3D.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator3dnonuniform.htm
 */
export class IfcCartesianTransformationOperator3DnonUniform extends IfcCartesianTransformationOperator3D {
	Scale2 : IfcReal // optional
	Scale3 : IfcReal // optional

    get Scl2() : IfcReal{throw "Derived property logic has not been implemented for Scl2."} // derived
    set Scl2(value : IfcReal){super.Scl2 = value}

    get Scl3() : IfcReal{throw "Derived property logic has not been implemented for Scl3."} // derived
    set Scl3(value : IfcReal){super.Scl3 = value}

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
		parameters.push(BaseIfc.toStepValue(this.Scale2))
		parameters.push(BaseIfc.toStepValue(this.Scale3))

        return parameters.join();
    }
}