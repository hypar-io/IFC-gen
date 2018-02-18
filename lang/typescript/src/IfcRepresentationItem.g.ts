
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationitem.htm
 */
export abstract class IfcRepresentationItem extends BaseIfc {
	LayerAssignment : Array<IfcPresentationLayerAssignment> // inverse
	StyledByItem : Array<IfcStyledItem> // inverse

    constructor() {
        super()
    }
}