
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
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.LightColour != null ? BaseIfc.toStepValue(this.LightColour) : "$");
		parameters.push(this.AmbientIntensity != null ? BaseIfc.toStepValue(this.AmbientIntensity) : "$");
		parameters.push(this.Intensity != null ? BaseIfc.toStepValue(this.Intensity) : "$");
		parameters.push(this.Position != null ? BaseIfc.toStepValue(this.Position) : "$");
		parameters.push(this.Radius != null ? BaseIfc.toStepValue(this.Radius) : "$");
		parameters.push(this.ConstantAttenuation != null ? BaseIfc.toStepValue(this.ConstantAttenuation) : "$");
		parameters.push(this.DistanceAttenuation != null ? BaseIfc.toStepValue(this.DistanceAttenuation) : "$");
		parameters.push(this.QuadricAttenuation != null ? BaseIfc.toStepValue(this.QuadricAttenuation) : "$");
		parameters.push(this.Orientation != null ? BaseIfc.toStepValue(this.Orientation) : "$");
		parameters.push(this.ConcentrationExponent != null ? BaseIfc.toStepValue(this.ConcentrationExponent) : "$");
		parameters.push(this.SpreadAngle != null ? BaseIfc.toStepValue(this.SpreadAngle) : "$");
		parameters.push(this.BeamWidthAngle != null ? BaseIfc.toStepValue(this.BeamWidthAngle) : "$");

        return parameters.join();
    }
}