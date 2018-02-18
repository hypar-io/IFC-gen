
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcSurfaceSide} from "./IfcSurfaceSide.g"
import {IfcExternallyDefinedSurfaceStyle} from "./IfcExternallyDefinedSurfaceStyle.g"
import {IfcSurfaceStyleLighting} from "./IfcSurfaceStyleLighting.g"
import {IfcSurfaceStyleRefraction} from "./IfcSurfaceStyleRefraction.g"
import {IfcSurfaceStyleShading} from "./IfcSurfaceStyleShading.g"
import {IfcSurfaceStyleWithTextures} from "./IfcSurfaceStyleWithTextures.g"
import {IfcPresentationStyle} from "./IfcPresentationStyle.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestyle.htm
 */
export class IfcSurfaceStyle extends IfcPresentationStyle {
	Side : IfcSurfaceSide
	Styles : Array<IfcExternallyDefinedSurfaceStyle|IfcSurfaceStyleLighting|IfcSurfaceStyleRefraction|IfcSurfaceStyleShading|IfcSurfaceStyleWithTextures>

    constructor(side : IfcSurfaceSide, styles : Array<IfcExternallyDefinedSurfaceStyle|IfcSurfaceStyleLighting|IfcSurfaceStyleRefraction|IfcSurfaceStyleShading|IfcSurfaceStyleWithTextures>) {
        super()
		this.Side = side
		this.Styles = styles

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Side))
		parameters.push(BaseIfc.toStepValue(this.Styles))

        return parameters.join();
    }
}