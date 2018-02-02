
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcFaceBound} from "./IfcFaceBound.g"
import {IfcTextureMap} from "./IfcTextureMap.g"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcface.htm
 */
export class IfcFace extends IfcTopologicalRepresentationItem {
	Bounds : Array<IfcFaceBound>
	HasTextureMaps : Array<IfcTextureMap> // inverse

    constructor(bounds : Array<IfcFaceBound>) {
        super()
		this.HasTextureMaps = new Array<IfcTextureMap>()

		this.Bounds = bounds

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Bounds != null ? BaseIfc.toStepValue(this.Bounds) : "$");

        return parameters.join();
    }
}