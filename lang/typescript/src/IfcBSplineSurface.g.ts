
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcBSplineSurfaceForm} from "./IfcBSplineSurfaceForm.g"
import {IfcLogical} from "./IfcLogical.g"
import {IfcBSplineSurfaceWithKnots} from "./IfcBSplineSurfaceWithKnots.g"
import {IfcBoundedSurface} from "./IfcBoundedSurface.g"

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