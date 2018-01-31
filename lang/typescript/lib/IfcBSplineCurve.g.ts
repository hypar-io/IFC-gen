
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcInteger} from "./IfcInteger"
import {IfcCartesianPoint} from "./IfcCartesianPoint"
import {IfcBSplineCurveForm} from "./IfcBSplineCurveForm"
import {IfcLogical} from "./IfcLogical"
import {IfcBSplineCurveWithKnots} from "./IfcBSplineCurveWithKnots"
import {IfcBoundedCurve} from "./IfcBoundedCurve"

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