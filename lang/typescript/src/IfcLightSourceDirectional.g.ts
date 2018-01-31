
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcColourRgb} from "./IfcColourRgb.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcLightSource} from "./IfcLightSource.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcedirectional.htm
export class IfcLightSourceDirectional extends IfcLightSource {
	Orientation : IfcDirection

    constructor(lightColour : IfcColourRgb, orientation : IfcDirection) {
        super(lightColour)

		this.Orientation = orientation

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.LightColour != null ? this.toStepValue(this.LightColour) : "$");
		parameters.push(this.AmbientIntensity != null ? this.toStepValue(this.AmbientIntensity) : "$");
		parameters.push(this.Intensity != null ? this.toStepValue(this.Intensity) : "$");
		parameters.push(this.Orientation != null ? this.toStepValue(this.Orientation) : "$");

        return parameters.join();
    }
}