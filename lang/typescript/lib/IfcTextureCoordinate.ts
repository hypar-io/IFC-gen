
import {BaseIfc} from "./BaseIfc"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture"
import {IfcIndexedTextureMap} from "./IfcIndexedTextureMap"
import {IfcTextureCoordinateGenerator} from "./IfcTextureCoordinateGenerator"
import {IfcTextureMap} from "./IfcTextureMap"
import {IfcPresentationItem} from "./IfcPresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturecoordinate.htm
export abstract class IfcTextureCoordinate extends IfcPresentationItem {
	Maps : Array<IfcSurfaceTexture>

    constructor(maps : Array<IfcSurfaceTexture>) {
        super()

		this.Maps = maps

    }
}