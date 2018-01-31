
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

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrationalbsplinesurfacewithknots.htm
export class IfcRationalBSplineSurfaceWithKnots extends IfcBSplineSurfaceWithKnots {
	WeightsData : Array<Array<IfcReal>>

    get Weights() : Array<Array<IfcReal>>{throw "Derived property logic has been implemented for Weights."} // derived

    constructor(uDegree : IfcInteger, vDegree : IfcInteger, controlPointsList : Array<Array<IfcCartesianPoint>>, surfaceForm : IfcBSplineSurfaceForm, uClosed : IfcLogical, vClosed : IfcLogical, selfIntersect : IfcLogical, uMultiplicities : Array<IfcInteger>, vMultiplicities : Array<IfcInteger>, uKnots : Array<IfcParameterValue>, vKnots : Array<IfcParameterValue>, knotSpec : IfcKnotType, weightsData : Array<Array<IfcReal>>) {
        super(uDegree,vDegree,controlPointsList,surfaceForm,uClosed,vClosed,selfIntersect,uMultiplicities,vMultiplicities,uKnots,vKnots,knotSpec)

		this.WeightsData = weightsData

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
		parameters.push(this.WeightsData != null ? this.toStepValue(this.WeightsData) : "$");

        return parameters.join();
    }
}