
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
		parameters.push(this.Degree != null ? BaseIfc.toStepValue(this.Degree) : "$");
		parameters.push(this.ControlPointsList != null ? BaseIfc.toStepValue(this.ControlPointsList) : "$");
		parameters.push(this.CurveForm != null ? BaseIfc.toStepValue(this.CurveForm) : "$");
		parameters.push(this.ClosedCurve != null ? BaseIfc.toStepValue(this.ClosedCurve) : "$");
		parameters.push(this.SelfIntersect != null ? BaseIfc.toStepValue(this.SelfIntersect) : "$");
		parameters.push(this.KnotMultiplicities != null ? BaseIfc.toStepValue(this.KnotMultiplicities) : "$");
		parameters.push(this.Knots != null ? BaseIfc.toStepValue(this.Knots) : "$");
		parameters.push(this.KnotSpec != null ? BaseIfc.toStepValue(this.KnotSpec) : "$");
		parameters.push(this.WeightsData != null ? BaseIfc.toStepValue(this.WeightsData) : "$");

        return parameters.join();
    }
}