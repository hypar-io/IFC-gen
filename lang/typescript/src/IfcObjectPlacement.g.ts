
import {BaseIfc} from "./BaseIfc"
import {IfcProduct} from "./IfcProduct.g"
import {IfcLocalPlacement} from "./IfcLocalPlacement.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjectplacement.htm
 */
export abstract class IfcObjectPlacement extends BaseIfc {
	PlacesObject : Array<IfcProduct> // inverse
	ReferencedByPlacements : Array<IfcLocalPlacement> // inverse

    constructor() {
        super()
    }
}