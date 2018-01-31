
import {BaseIfc} from "./BaseIfc"
import {IfcColourRgb} from "./IfcColourRgb.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcColourOrFactor} from "./IfcColourOrFactor.g"
import {IfcSpecularHighlightSelect} from "./IfcSpecularHighlightSelect.g"
import {IfcReflectanceMethodEnum} from "./IfcReflectanceMethodEnum.g"
import {IfcSurfaceStyleShading} from "./IfcSurfaceStyleShading.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylerendering.htm
export class IfcSurfaceStyleRendering extends IfcSurfaceStyleShading {
	DiffuseColour : IfcColourOrFactor// optional
	TransmissionColour : IfcColourOrFactor// optional
	DiffuseTransmissionColour : IfcColourOrFactor// optional
	ReflectionColour : IfcColourOrFactor// optional
	SpecularColour : IfcColourOrFactor// optional
	SpecularHighlight : IfcSpecularHighlightSelect// optional
	ReflectanceMethod : IfcReflectanceMethodEnum

    constructor(surfaceColour : IfcColourRgb, reflectanceMethod : IfcReflectanceMethodEnum) {
        super(surfaceColour)

		this.ReflectanceMethod = reflectanceMethod

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SurfaceColour != null ? this.toStepValue(this.SurfaceColour) : "$");
		parameters.push(this.Transparency != null ? this.toStepValue(this.Transparency) : "$");
		parameters.push(this.DiffuseColour != null ? this.toStepValue(this.DiffuseColour) : "$");
		parameters.push(this.TransmissionColour != null ? this.toStepValue(this.TransmissionColour) : "$");
		parameters.push(this.DiffuseTransmissionColour != null ? this.toStepValue(this.DiffuseTransmissionColour) : "$");
		parameters.push(this.ReflectionColour != null ? this.toStepValue(this.ReflectionColour) : "$");
		parameters.push(this.SpecularColour != null ? this.toStepValue(this.SpecularColour) : "$");
		parameters.push(this.SpecularHighlight != null ? this.toStepValue(this.SpecularHighlight) : "$");
		parameters.push(this.toStepValue(this.ReflectanceMethod));

        return parameters.join();
    }
}