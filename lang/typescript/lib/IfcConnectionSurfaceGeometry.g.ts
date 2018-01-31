
import {BaseIfc} from "./BaseIfc"
import {IfcSurfaceOrFaceSurface} from "./IfcSurfaceOrFaceSurface"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionsurfacegeometry.htm
export class IfcConnectionSurfaceGeometry extends IfcConnectionGeometry {
	SurfaceOnRelatingElement : IfcSurfaceOrFaceSurface
	SurfaceOnRelatedElement : IfcSurfaceOrFaceSurface// optional

    constructor(surfaceOnRelatingElement : IfcSurfaceOrFaceSurface) {
        super()

		this.SurfaceOnRelatingElement = surfaceOnRelatingElement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SurfaceOnRelatingElement != null ? this.toStepValue(this.SurfaceOnRelatingElement) : "$");
		parameters.push(this.SurfaceOnRelatedElement != null ? this.toStepValue(this.SurfaceOnRelatedElement) : "$");

        return parameters.join();
    }
}