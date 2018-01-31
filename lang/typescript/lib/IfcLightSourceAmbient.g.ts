
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcLabel} from "./IfcLabel"
import {IfcColourRgb} from "./IfcColourRgb"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure"
import {IfcLightSource} from "./IfcLightSource"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourceambient.htm
export class IfcLightSourceAmbient extends IfcLightSource {

    constructor(lightColour : IfcColourRgb) {
        super(lightColour)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.LightColour != null ? this.toStepValue(this.LightColour) : "$");
		parameters.push(this.AmbientIntensity != null ? this.toStepValue(this.AmbientIntensity) : "$");
		parameters.push(this.Intensity != null ? this.toStepValue(this.Intensity) : "$");

        return parameters.join();
    }
}