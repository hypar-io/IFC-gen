
import {BaseIfc} from "./BaseIfc"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylewithtextures.htm
 */
export class IfcSurfaceStyleWithTextures extends IfcPresentationItem {
	Textures : Array<IfcSurfaceTexture>

    constructor(textures : Array<IfcSurfaceTexture>) {
        super()

		this.Textures = textures

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Textures))

        return parameters.join();
    }
}