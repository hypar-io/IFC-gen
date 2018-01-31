
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcFaceBound} from "./IfcFaceBound"
import {IfcTextureMap} from "./IfcTextureMap"
import {IfcFaceSurface} from "./IfcFaceSurface"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcface.htm
export class IfcFace extends IfcTopologicalRepresentationItem {
	Bounds : Array<IfcFaceBound>
	HasTextureMaps : Array<IfcTextureMap>// inverse

    constructor(bounds : Array<IfcFaceBound>) {
        super()
		this.HasTextureMaps = new Array<IfcTextureMap>()

		this.Bounds = bounds

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Bounds != null ? this.toStepValue(this.Bounds) : "$");

        return parameters.join();
    }
}