
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcBSplineCurveForm} from "./IfcBSplineCurveForm.g"
import {IfcLogical} from "./IfcLogical.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcKnotType} from "./IfcKnotType.g"
import {IfcReal} from "./IfcReal.g"
import {IfcBSplineCurveWithKnots} from "./IfcBSplineCurveWithKnots.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrationalbsplinecurvewithknots.htm
 */
export class IfcRationalBSplineCurveWithKnots extends IfcBSplineCurveWithKnots {
	WeightsData : Array<IfcReal>

    get Weights() : Array<IfcReal>{throw "Derived property logic has not been implemented for Weights."} // derived
    set Weights(value : Array<IfcReal>){super.Weights = value}

    constructor(degree : IfcInteger, controlPointsList : Array<IfcCartesianPoint>, curveForm : IfcBSplineCurveForm, closedCurve : IfcLogical, selfIntersect : IfcLogical, knotMultiplicities : Array<IfcInteger>, knots : Array<IfcParameterValue>, knotSpec : IfcKnotType, weightsData : Array<IfcReal>) {
        super(degree,controlPointsList,curveForm,closedCurve,selfIntersect,knotMultiplicities,knots,knotSpec)
		this.WeightsData = weightsData

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Degree))
		parameters.push(BaseIfc.toStepValue(this.ControlPointsList))
		parameters.push(BaseIfc.toStepValue(this.CurveForm))
		parameters.push(BaseIfc.toStepValue(this.ClosedCurve))
		parameters.push(BaseIfc.toStepValue(this.SelfIntersect))
		parameters.push(BaseIfc.toStepValue(this.KnotMultiplicities))
		parameters.push(BaseIfc.toStepValue(this.Knots))
		parameters.push(BaseIfc.toStepValue(this.KnotSpec))
		parameters.push(BaseIfc.toStepValue(this.WeightsData))

        return parameters.join();
    }
}