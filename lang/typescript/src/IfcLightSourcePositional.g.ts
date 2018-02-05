
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcColourRgb} from "./IfcColourRgb.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcReal} from "./IfcReal.g"
import {IfcLightSource} from "./IfcLightSource.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcepositional.htm
 */
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
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.LightColour))
		parameters.push(BaseIfc.toStepValue(this.AmbientIntensity))
		parameters.push(BaseIfc.toStepValue(this.Intensity))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Radius))
		parameters.push(BaseIfc.toStepValue(this.ConstantAttenuation))
		parameters.push(BaseIfc.toStepValue(this.DistanceAttenuation))
		parameters.push(BaseIfc.toStepValue(this.QuadricAttenuation))

            return parameters.join();
        }
}