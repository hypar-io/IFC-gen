
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcInteger} from "./IfcInteger"
import {IfcCartesianPoint} from "./IfcCartesianPoint"
import {IfcBSplineSurfaceForm} from "./IfcBSplineSurfaceForm"
import {IfcLogical} from "./IfcLogical"
import {IfcParameterValue} from "./IfcParameterValue"
import {IfcKnotType} from "./IfcKnotType"
import {IfcRationalBSplineSurfaceWithKnots} from "./IfcRationalBSplineSurfaceWithKnots"
import {IfcBSplineSurface} from "./IfcBSplineSurface"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbsplinesurfacewithknots.htm
export class IfcBSplineSurfaceWithKnots extends IfcBSplineSurface {
	UMultiplicities : Array<IfcInteger>
	VMultiplicities : Array<IfcInteger>
	UKnots : Array<IfcParameterValue>
	VKnots : Array<IfcParameterValue>
	KnotSpec : IfcKnotType

    get KnotVUpper() : IfcInteger{throw "Derived property logic has been implemented for KnotVUpper."} // derived

    get KnotUUpper() : IfcInteger{throw "Derived property logic has been implemented for KnotUUpper."} // derived

    constructor(uDegree : IfcInteger, vDegree : IfcInteger, controlPointsList : Array<Array<IfcCartesianPoint>>, surfaceForm : IfcBSplineSurfaceForm, uClosed : IfcLogical, vClosed : IfcLogical, selfIntersect : IfcLogical, uMultiplicities : Array<IfcInteger>, vMultiplicities : Array<IfcInteger>, uKnots : Array<IfcParameterValue>, vKnots : Array<IfcParameterValue>, knotSpec : IfcKnotType) {
        super(uDegree,vDegree,controlPointsList,surfaceForm,uClosed,vClosed,selfIntersect)

		this.UMultiplicities = uMultiplicities
		this.VMultiplicities = vMultiplicities
		this.UKnots = uKnots
		this.VKnots = vKnots
		this.KnotSpec = knotSpec

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.UDegree != null ? this.toStepValue(this.UDegree) : "$");
		parameters.push(this.VDegree != null ? this.toStepValue(this.VDegree) : "$");
		parameters.push(this.ControlPointsList != null ? this.toStepValue(this.ControlPointsList) : "$");
		parameters.push(this.SurfaceForm != null ? this.toStepValue(this.SurfaceForm) : "$");
		parameters.push(this.UClosed != null ? this.toStepValue(this.UClosed) : "$");
		parameters.push(this.VClosed != null ? this.toStepValue(this.VClosed) : "$");
		parameters.push(this.SelfIntersect != null ? this.toStepValue(this.SelfIntersect) : "$");
		parameters.push(this.UMultiplicities != null ? this.toStepValue(this.UMultiplicities) : "$");
		parameters.push(this.VMultiplicities != null ? this.toStepValue(this.VMultiplicities) : "$");
		parameters.push(this.UKnots != null ? this.toStepValue(this.UKnots) : "$");
		parameters.push(this.VKnots != null ? this.toStepValue(this.VKnots) : "$");
		parameters.push(this.KnotSpec != null ? this.toStepValue(this.KnotSpec) : "$");

        return parameters.join();
    }
}