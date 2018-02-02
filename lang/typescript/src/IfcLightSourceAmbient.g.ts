
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcColourRgb} from "./IfcColourRgb.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcLightSource} from "./IfcLightSource.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourceambient.htm
 */
export class IfcLightSourceAmbient extends IfcLightSource {

    constructor(lightColour : IfcColourRgb) {
        super(lightColour)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.LightColour != null ? BaseIfc.toStepValue(this.LightColour) : "$");
		parameters.push(this.AmbientIntensity != null ? BaseIfc.toStepValue(this.AmbientIntensity) : "$");
		parameters.push(this.Intensity != null ? BaseIfc.toStepValue(this.Intensity) : "$");

        return parameters.join();
    }
}