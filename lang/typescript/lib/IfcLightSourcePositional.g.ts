
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcColourRgb} from "./IfcColourRgb.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcReal} from "./IfcReal.g"
import {IfcLightSourceSpot} from "./IfcLightSourceSpot.g"
import {IfcLightSource} from "./IfcLightSource.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcepositional.htm
export class IfcLightSourcePositional extends IfcLightSource {
	Position : IfcCartesianPoint
	Radius : IfcPositiveLengthMeasure
	ConstantAttenuation : IfcReal
	DistanceAttenuation : IfcReal
	QuadricAttenuation : IfcReal

    constructor(lightColour : IfcColourRgb, position : IfcCartesianPoint, radius : IfcPositiveLengthMeasure, constantAttenuation : IfcReal, distanceAttenuation : IfcReal, quadricAttenuation : IfcReal) {
        super(lightColour)

		this.Position = position
		this.Radius = radius
		this.ConstantAttenuation = constantAttenuation
		this.DistanceAttenuation = distanceAttenuation
		this.QuadricAttenuation = quadricAttenuation

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

        return parameters.join();
    }
}