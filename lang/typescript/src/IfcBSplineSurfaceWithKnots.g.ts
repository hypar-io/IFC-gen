
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcBSplineSurfaceForm} from "./IfcBSplineSurfaceForm.g"
import {IfcLogical} from "./IfcLogical.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcKnotType} from "./IfcKnotType.g"
import {IfcBSplineSurface} from "./IfcBSplineSurface.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbsplinesurfacewithknots.htm
 */
export class IfcBSplineSurfaceWithKnots extends IfcBSplineSurface {
	UMultiplicities : Array<IfcInteger>
	VMultiplicities : Array<IfcInteger>
	UKnots : Array<IfcParameterValue>
	VKnots : Array<IfcParameterValue>
	KnotSpec : IfcKnotType

    get KnotVUpper() : IfcInteger{throw "Derived property logic has not been implemented for KnotVUpper."} // derived
    set KnotVUpper(value : IfcInteger){super.KnotVUpper = value}

    get KnotUUpper() : IfcInteger{throw "Derived property logic has not been implemented for KnotUUpper."} // derived
    set KnotUUpper(value : IfcInteger){super.KnotUUpper = value}

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
		parameters.push(BaseIfc.toStepValue(this.UDegree))
		parameters.push(BaseIfc.toStepValue(this.VDegree))
		parameters.push(BaseIfc.toStepValue(this.ControlPointsList))
		parameters.push(BaseIfc.toStepValue(this.SurfaceForm))
		parameters.push(BaseIfc.toStepValue(this.UClosed))
		parameters.push(BaseIfc.toStepValue(this.VClosed))
		parameters.push(BaseIfc.toStepValue(this.SelfIntersect))
		parameters.push(BaseIfc.toStepValue(this.UMultiplicities))
		parameters.push(BaseIfc.toStepValue(this.VMultiplicities))
		parameters.push(BaseIfc.toStepValue(this.UKnots))
		parameters.push(BaseIfc.toStepValue(this.VKnots))
		parameters.push(BaseIfc.toStepValue(this.KnotSpec))

        return parameters.join();
    }
}