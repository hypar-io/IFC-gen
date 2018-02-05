
import {BaseIfc} from "./BaseIfc"
import {IfcFaceBasedSurfaceModel} from "./IfcFaceBasedSurfaceModel.g"
import {IfcFaceSurface} from "./IfcFaceSurface.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionsurfacegeometry.htm
 */
export class IfcConnectionSurfaceGeometry extends IfcConnectionGeometry {
	SurfaceOnRelatingElement : IfcFaceBasedSurfaceModel|IfcFaceSurface|IfcSurface
	SurfaceOnRelatedElement : IfcFaceBasedSurfaceModel|IfcFaceSurface|IfcSurface // optional

    constructor(surfaceOnRelatingElement : IfcFaceBasedSurfaceModel|IfcFaceSurface|IfcSurface) {
        super()

		this.SurfaceOnRelatingElement = surfaceOnRelatingElement

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.SurfaceOnRelatingElement))
		parameters.push(BaseIfc.toStepValue(this.SurfaceOnRelatedElement))

            return parameters.join();
        }
}