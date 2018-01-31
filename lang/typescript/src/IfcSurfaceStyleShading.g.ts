
import {BaseIfc} from "./BaseIfc"
import {IfcColourRgb} from "./IfcColourRgb.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcSurfaceStyleRendering} from "./IfcSurfaceStyleRendering.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestyleshading.htm
export class IfcSurfaceStyleShading extends IfcPresentationItem {
	SurfaceColour : IfcColourRgb
	Transparency : IfcNormalisedRatioMeasure// optional

    constructor(surfaceColour : IfcColourRgb) {
        super()

		this.SurfaceColour = surfaceColour

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SurfaceColour != null ? this.toStepValue(this.SurfaceColour) : "$");
		parameters.push(this.Transparency != null ? this.toStepValue(this.Transparency) : "$");

        return parameters.join();
    }
}