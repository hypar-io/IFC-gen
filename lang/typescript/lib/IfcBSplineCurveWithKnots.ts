
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
import {IfcRationalBSplineCurveWithKnots} from "./IfcRationalBSplineCurveWithKnots"
import {IfcBSplineCurve} from "./IfcBSplineCurve"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbsplinecurvewithknots.htm
export class IfcBSplineCurveWithKnots extends IfcBSplineCurve {
	KnotMultiplicities : Array<IfcInteger>
	Knots : Array<IfcParameterValue>
	KnotSpec : IfcKnotType

    get UpperIndexOnKnots() : IfcInteger{throw "Derived property logic has been implemented for UpperIndexOnKnots."} // derived

    constructor(degree : IfcInteger, controlPointsList : Array<IfcCartesianPoint>, curveForm : IfcBSplineCurveForm, closedCurve : IfcLogical, selfIntersect : IfcLogical, knotMultiplicities : Array<IfcInteger>, knots : Array<IfcParameterValue>, knotSpec : IfcKnotType) {
        super(degree,controlPointsList,curveForm,closedCurve,selfIntersect)

		this.KnotMultiplicities = knotMultiplicities
		this.Knots = knots
		this.KnotSpec = knotSpec

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

        return parameters.join();
    }
}