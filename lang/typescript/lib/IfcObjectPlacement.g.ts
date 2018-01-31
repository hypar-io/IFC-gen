
import {BaseIfc} from "./BaseIfc"
import {IfcProduct} from "./IfcProduct.g"
import {IfcLocalPlacement} from "./IfcLocalPlacement.g"
import {IfcGridPlacement} from "./IfcGridPlacement.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjectplacement.htm
export abstract class IfcObjectPlacement extends BaseIfc {
	PlacesObject : Array<IfcProduct>// inverse
	ReferencedByPlacements : Array<IfcLocalPlacement>// inverse

    constructor() {
        super()
		this.PlacesObject = new Array<IfcProduct>()
		this.ReferencedByPlacements = new Array<IfcLocalPlacement>()

    }
}