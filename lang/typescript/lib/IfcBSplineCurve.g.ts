
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcBSplineCurveForm} from "./IfcBSplineCurveForm.g"
import {IfcLogical} from "./IfcLogical.g"
import {IfcBSplineCurveWithKnots} from "./IfcBSplineCurveWithKnots.g"
import {IfcBoundedCurve} from "./IfcBoundedCurve.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbsplinecurve.htm
export abstract class IfcBSplineCurve extends IfcBoundedCurve {
	Degree : IfcInteger
	ControlPointsList : Array<IfcCartesianPoint>
	CurveForm : IfcBSplineCurveForm
	ClosedCurve : IfcLogical
	SelfIntersect : IfcLogical

    get UpperIndexOnControlPoints() : IfcInteger{throw "Derived property logic has been implemented for UpperIndexOnControlPoints."} // derived

    get ControlPoints() : Array<IfcCartesianPoint>{throw "Derived property logic has been implemented for ControlPoints."} // derived

    constructor(degree : IfcInteger, controlPointsList : Array<IfcCartesianPoint>, curveForm : IfcBSplineCurveForm, closedCurve : IfcLogical, selfIntersect : IfcLogical) {
        super()

		this.Degree = degree
		this.ControlPointsList = controlPointsList
		this.CurveForm = curveForm
		this.ClosedCurve = closedCurve
		this.SelfIntersect = selfIntersect

    }
}