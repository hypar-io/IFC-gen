
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcLabel} from "./IfcLabel"
import {IfcColourRgb} from "./IfcColourRgb"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure"
import {IfcCartesianPoint} from "./IfcCartesianPoint"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcReal} from "./IfcReal"
import {IfcDirection} from "./IfcDirection"
import {IfcPositivePlaneAngleMeasure} from "./IfcPositivePlaneAngleMeasure"
import {IfcLightSourcePositional} from "./IfcLightSourcePositional"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcespot.htm
export class IfcLightSourceSpot extends IfcLightSourcePositional {
	Orientation : IfcDirection
	ConcentrationExponent : IfcReal// optional
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
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.LightColour != null ? this.toStepValue(this.LightColour) : "$");
		parameters.push(this.AmbientIntensity != null ? this.toStepValue(this.AmbientIntensity) : "$");
		parameters.push(this.Intensity != null ? this.toStepValue(this.Intensity) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.Radius != null ? this.toStepValue(this.Radius) : "$");
		parameters.push(this.ConstantAttenuation != null ? this.toStepValue(this.ConstantAttenuation) : "$");
		parameters.push(this.DistanceAttenuation != null ? this.toStepValue(this.DistanceAttenuation) : "$");
		parameters.push(this.QuadricAttenuation != null ? this.toStepValue(this.QuadricAttenuation) : "$");
		parameters.push(this.Orientation != null ? this.toStepValue(this.Orientation) : "$");
		parameters.push(this.ConcentrationExponent != null ? this.toStepValue(this.ConcentrationExponent) : "$");
		parameters.push(this.SpreadAngle != null ? this.toStepValue(this.SpreadAngle) : "$");
		parameters.push(this.BeamWidthAngle != null ? this.toStepValue(this.BeamWidthAngle) : "$");

        return parameters.join();
    }
}