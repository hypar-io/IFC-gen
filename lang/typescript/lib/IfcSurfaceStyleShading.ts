
import {BaseIfc} from "./BaseIfc"
import {IfcColourRgb} from "./IfcColourRgb"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure"
import {IfcSurfaceStyleRendering} from "./IfcSurfaceStyleRendering"
import {IfcPresentationItem} from "./IfcPresentationItem"

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