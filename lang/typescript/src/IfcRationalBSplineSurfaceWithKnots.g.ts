
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
import {IfcReal} from "./IfcReal.g"
import {IfcBSplineSurfaceWithKnots} from "./IfcBSplineSurfaceWithKnots.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrationalbsplinesurfacewithknots.htm
 */
export class IfcRationalBSplineSurfaceWithKnots extends IfcBSplineSurfaceWithKnots {
	WeightsData : Array<Array<IfcReal>>

    get Weights() : Array<Array<IfcReal>>{throw "Derived property logic has not been implemented for Weights."} // derived
    set Weights(value : Array<Array<IfcReal>>){super.Weights = value}

    constructor(uDegree : IfcInteger, vDegree : IfcInteger, controlPointsList : Array<Array<IfcCartesianPoint>>, surfaceForm : IfcBSplineSurfaceForm, uClosed : IfcLogical, vClosed : IfcLogical, selfIntersect : IfcLogical, uMultiplicities : Array<IfcInteger>, vMultiplicities : Array<IfcInteger>, uKnots : Array<IfcParameterValue>, vKnots : Array<IfcParameterValue>, knotSpec : IfcKnotType, weightsData : Array<Array<IfcReal>>) {
        super(uDegree,vDegree,controlPointsList,surfaceForm,uClosed,vClosed,selfIntersect,uMultiplicities,vMultiplicities,uKnots,vKnots,knotSpec)
		this.WeightsData = weightsData

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
		parameters.push(BaseIfc.toStepValue(this.WeightsData))

        return parameters.join();
    }
}