
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcFaceBound} from "./IfcFaceBound.g"
import {IfcTextureMap} from "./IfcTextureMap.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcFace} from "./IfcFace.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacesurface.htm
 */
export class IfcFaceSurface extends IfcFace {
	FaceSurface : IfcSurface
	SameSense : IfcBoolean

    constructor(bounds : Array<IfcFaceBound>, faceSurface : IfcSurface, sameSense : IfcBoolean) {
        super(bounds)

		this.FaceSurface = faceSurface
		this.SameSense = sameSense

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Bounds != null ? BaseIfc.toStepValue(this.Bounds) : "$");
		parameters.push(this.FaceSurface != null ? BaseIfc.toStepValue(this.FaceSurface) : "$");
		parameters.push(this.SameSense != null ? BaseIfc.toStepValue(this.SameSense) : "$");

        return parameters.join();
    }
}