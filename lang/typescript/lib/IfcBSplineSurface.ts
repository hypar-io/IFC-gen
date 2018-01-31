
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcInteger} from "./IfcInteger"
import {IfcCartesianPoint} from "./IfcCartesianPoint"
import {IfcBSplineSurfaceForm} from "./IfcBSplineSurfaceForm"
import {IfcLogical} from "./IfcLogical"
import {IfcBSplineSurfaceWithKnots} from "./IfcBSplineSurfaceWithKnots"
import {IfcBoundedSurface} from "./IfcBoundedSurface"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbsplinesurface.htm
export abstract class IfcBSplineSurface extends IfcBoundedSurface {
	UDegree : IfcInteger
	VDegree : IfcInteger
	ControlPointsList : Array<Array<IfcCartesianPoint>>
	SurfaceForm : IfcBSplineSurfaceForm
	UClosed : IfcLogical
	VClosed : IfcLogical
	SelfIntersect : IfcLogical

    get UUpper() : IfcInteger{throw "Derived property logic has been implemented for UUpper."} // derived

    get VUpper() : IfcInteger{throw "Derived property logic has been implemented for VUpper."} // derived

    get ControlPoints() : Array<Array<IfcCartesianPoint>>{throw "Derived property logic has been implemented for ControlPoints."} // derived

    constructor(uDegree : IfcInteger, vDegree : IfcInteger, controlPointsList : Array<Array<IfcCartesianPoint>>, surfaceForm : IfcBSplineSurfaceForm, uClosed : IfcLogical, vClosed : IfcLogical, selfIntersect : IfcLogical) {
        super()

		this.UDegree = uDegree
		this.VDegree = vDegree
		this.ControlPointsList = controlPointsList
		this.SurfaceForm = surfaceForm
		this.UClosed = uClosed
		this.VClosed = vClosed
		this.SelfIntersect = selfIntersect

    }
}