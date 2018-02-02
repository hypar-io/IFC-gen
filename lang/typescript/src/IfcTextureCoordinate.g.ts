
import {BaseIfc} from "./BaseIfc"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturecoordinate.htm
 */
export abstract class IfcTextureCoordinate extends IfcPresentationItem {
	Maps : Array<IfcSurfaceTexture>

    constructor(maps : Array<IfcSurfaceTexture>) {
        super()

		this.Maps = maps

    }
}