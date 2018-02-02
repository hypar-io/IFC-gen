
import {BaseIfc} from "./BaseIfc"
import {IfcColourRgb} from "./IfcColourRgb.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcSpecularExponent} from "./IfcSpecularExponent.g"
import {IfcSpecularRoughness} from "./IfcSpecularRoughness.g"
import {IfcReflectanceMethodEnum} from "./IfcReflectanceMethodEnum.g"
import {IfcSurfaceStyleShading} from "./IfcSurfaceStyleShading.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylerendering.htm
 */
export class IfcSurfaceStyleRendering extends IfcSurfaceStyleShading {
	DiffuseColour : IfcColourRgb|IfcNormalisedRatioMeasure // optional
	TransmissionColour : IfcColourRgb|IfcNormalisedRatioMeasure // optional
	DiffuseTransmissionColour : IfcColourRgb|IfcNormalisedRatioMeasure // optional
	ReflectionColour : IfcColourRgb|IfcNormalisedRatioMeasure // optional
	SpecularColour : IfcColourRgb|IfcNormalisedRatioMeasure // optional
	SpecularHighlight : IfcSpecularExponent|IfcSpecularRoughness // optional
	ReflectanceMethod : IfcReflectanceMethodEnum

    constructor(surfaceColour : IfcColourRgb, reflectanceMethod : IfcReflectanceMethodEnum) {
        super(surfaceColour)

		this.ReflectanceMethod = reflectanceMethod

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SurfaceColour != null ? BaseIfc.toStepValue(this.SurfaceColour) : "$");
		parameters.push(this.Transparency != null ? BaseIfc.toStepValue(this.Transparency) : "$");
		parameters.push(this.DiffuseColour != null ? BaseIfc.toStepValue(this.DiffuseColour) : "$");
		parameters.push(this.TransmissionColour != null ? BaseIfc.toStepValue(this.TransmissionColour) : "$");
		parameters.push(this.DiffuseTransmissionColour != null ? BaseIfc.toStepValue(this.DiffuseTransmissionColour) : "$");
		parameters.push(this.ReflectionColour != null ? BaseIfc.toStepValue(this.ReflectionColour) : "$");
		parameters.push(this.SpecularColour != null ? BaseIfc.toStepValue(this.SpecularColour) : "$");
		parameters.push(this.SpecularHighlight != null ? BaseIfc.toStepValue(this.SpecularHighlight) : "$");
		parameters.push(BaseIfc.toStepValue(this.ReflectanceMethod));

        return parameters.join();
    }
}