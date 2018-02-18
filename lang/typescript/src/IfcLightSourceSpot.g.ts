
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcColourRgb} from "./IfcColourRgb.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcReal} from "./IfcReal.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcPositivePlaneAngleMeasure} from "./IfcPositivePlaneAngleMeasure.g"
import {IfcLightSourcePositional} from "./IfcLightSourcePositional.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcespot.htm
 */
export class IfcLightSourceSpot extends IfcLightSourcePositional {
	Orientation : IfcDirection
	ConcentrationExponent : IfcReal // optional
	SpreadAngle : IfcPositivePlaneAngleMeasure
	BeamWidthAngle : IfcPositivePlaneAngleMeasure

    constructor(lightColour : IfcColourRgb, position : IfcCartesianPoint, radius : IfcPositiveLengthMeasure, constantAttenuation : IfcReal, distanceAttenuation : IfcReal, quadricAttenuation : IfcReal, orientation : IfcDirection, spreadAngle : IfcPositivePlaneAngleMeasure, beamWidthAngle : IfcPositivePlaneAngleMeasure) {
        super(lightColour,position,radius,constantAttenuation,distanceAttenuation,quadricAttenuation)

		this.Orientation = orientation
		this.SpreadAngle = spreadAngle
		this.BeamWidthAngle = beamWidthAngle

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.LightColour))
		parameters.push(BaseIfc.toStepValue(this.AmbientIntensity))
		parameters.push(BaseIfc.toStepValue(this.Intensity))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Radius))
		parameters.push(BaseIfc.toStepValue(this.ConstantAttenuation))
		parameters.push(BaseIfc.toStepValue(this.DistanceAttenuation))
		parameters.push(BaseIfc.toStepValue(this.QuadricAttenuation))
		parameters.push(BaseIfc.toStepValue(this.Orientation))
		parameters.push(BaseIfc.toStepValue(this.ConcentrationExponent))
		parameters.push(BaseIfc.toStepValue(this.SpreadAngle))
		parameters.push(BaseIfc.toStepValue(this.BeamWidthAngle))

        return parameters.join();
    }
}