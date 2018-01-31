
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"
import {IfcMappedItem} from "./IfcMappedItem.g"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationitem.htm
export abstract class IfcRepresentationItem extends BaseIfc {
	LayerAssignment : Array<IfcPresentationLayerAssignment>// inverse
	StyledByItem : Array<IfcStyledItem>// inverse

    constructor() {
        super()
		this.LayerAssignment = new Array<IfcPresentationLayerAssignment>()
		this.StyledByItem = new Array<IfcStyledItem>()

    }
}