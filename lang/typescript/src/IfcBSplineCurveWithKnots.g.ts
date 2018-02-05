
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
import {IfcBSplineCurve} from "./IfcBSplineCurve.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbsplinecurvewithknots.htm
 */
export class IfcBSplineCurveWithKnots extends IfcBSplineCurve {
	KnotMultiplicities : Array<IfcInteger>
	Knots : Array<IfcParameterValue>
	KnotSpec : IfcKnotType

    get UpperIndexOnKnots() : IfcInteger{throw "Derived property logic has not been implemented for UpperIndexOnKnots."} // derived
    set UpperIndexOnKnots(value : IfcInteger){super.UpperIndexOnKnots = value}

    constructor(degree : IfcInteger, controlPointsList : Array<IfcCartesianPoint>, curveForm : IfcBSplineCurveForm, closedCurve : IfcLogical, selfIntersect : IfcLogical, knotMultiplicities : Array<IfcInteger>, knots : Array<IfcParameterValue>, knotSpec : IfcKnotType) {
        super(degree,controlPointsList,curveForm,closedCurve,selfIntersect)

		this.KnotMultiplicities = knotMultiplicities
		this.Knots = knots
		this.KnotSpec = knotSpec

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

            return parameters.join();
        }
}