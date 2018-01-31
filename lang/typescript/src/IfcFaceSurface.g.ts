
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcFaceBound} from "./IfcFaceBound.g"
import {IfcTextureMap} from "./IfcTextureMap.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcAdvancedFace} from "./IfcAdvancedFace.g"
import {IfcFace} from "./IfcFace.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacesurface.htm
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
		parameters.push(this.Bounds != null ? this.toStepValue(this.Bounds) : "$");
		parameters.push(this.FaceSurface != null ? this.toStepValue(this.FaceSurface) : "$");
		parameters.push(this.SameSense != null ? this.toStepValue(this.SameSense) : "$");

        return parameters.join();
    }
}