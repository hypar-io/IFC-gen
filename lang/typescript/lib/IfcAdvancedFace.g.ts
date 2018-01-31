
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcFaceBound} from "./IfcFaceBound"
import {IfcTextureMap} from "./IfcTextureMap"
import {IfcSurface} from "./IfcSurface"
import {IfcBoolean} from "./IfcBoolean"
import {IfcFaceSurface} from "./IfcFaceSurface"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcadvancedface.htm
export class IfcAdvancedFace extends IfcFaceSurface {

    constructor(bounds : Array<IfcFaceBound>, faceSurface : IfcSurface, sameSense : IfcBoolean) {
        super(bounds,faceSurface,sameSense)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Bounds != null ? this.toStepValue(this.Bounds) : "$");
		parameters.push(this.FaceSurface != null ? this.toStepValue(this.FaceSurface) : "$");
		parameters.push(this.SameSense != null ? this.toStepValue(this.SameSense) : "$");

        return parameters.join();
    }
}