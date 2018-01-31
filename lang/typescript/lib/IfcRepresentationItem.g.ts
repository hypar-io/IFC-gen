
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"
import {IfcMappedItem} from "./IfcMappedItem"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem"

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