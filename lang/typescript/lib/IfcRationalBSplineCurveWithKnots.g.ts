
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcInteger} from "./IfcInteger"
import {IfcCartesianPoint} from "./IfcCartesianPoint"
import {IfcBSplineCurveForm} from "./IfcBSplineCurveForm"
import {IfcLogical} from "./IfcLogical"
import {IfcParameterValue} from "./IfcParameterValue"
import {IfcKnotType} from "./IfcKnotType"
import {IfcReal} from "./IfcReal"
import {IfcBSplineCurveWithKnots} from "./IfcBSplineCurveWithKnots"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrationalbsplinecurvewithknots.htm
export class IfcRationalBSplineCurveWithKnots extends IfcBSplineCurveWithKnots {
	WeightsData : Array<IfcReal>

    get Weights() : Array<IfcReal>{throw "Derived property logic has been implemented for Weights."} // derived

    constructor(degree : IfcInteger, controlPointsList : Array<IfcCartesianPoint>, curveForm : IfcBSplineCurveForm, closedCurve : IfcLogical, selfIntersect : IfcLogical, knotMultiplicities : Array<IfcInteger>, knots : Array<IfcParameterValue>, knotSpec : IfcKnotType, weightsData : Array<IfcReal>) {
        super(degree,controlPointsList,curveForm,closedCurve,selfIntersect,knotMultiplicities,knots,knotSpec)

		this.WeightsData = weightsData

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Degree != null ? this.toStepValue(this.Degree) : "$");
		parameters.push(this.ControlPointsList != null ? this.toStepValue(this.ControlPointsList) : "$");
		parameters.push(this.CurveForm != null ? this.toStepValue(this.CurveForm) : "$");
		parameters.push(this.ClosedCurve != null ? this.toStepValue(this.ClosedCurve) : "$");
		parameters.push(this.SelfIntersect != null ? this.toStepValue(this.SelfIntersect) : "$");
		parameters.push(this.KnotMultiplicities != null ? this.toStepValue(this.KnotMultiplicities) : "$");
		parameters.push(this.Knots != null ? this.toStepValue(this.Knots) : "$");
		parameters.push(this.KnotSpec != null ? this.toStepValue(this.KnotSpec) : "$");
		parameters.push(this.WeightsData != null ? this.toStepValue(this.WeightsData) : "$");

        return parameters.join();
    }
}