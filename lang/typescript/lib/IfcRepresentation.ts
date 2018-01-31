
import {BaseIfc} from "./BaseIfc"
import {IfcRepresentationContext} from "./IfcRepresentationContext"
import {IfcLabel} from "./IfcLabel"
import {IfcRepresentationItem} from "./IfcRepresentationItem"
import {IfcRepresentationMap} from "./IfcRepresentationMap"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcProductRepresentation} from "./IfcProductRepresentation"
import {IfcShapeModel} from "./IfcShapeModel"
import {IfcStyleModel} from "./IfcStyleModel"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentation.htm
export abstract class IfcRepresentation extends BaseIfc {
	ContextOfItems : IfcRepresentationContext
	RepresentationIdentifier : IfcLabel// optional
	RepresentationType : IfcLabel// optional
	Items : Array<IfcRepresentationItem>
	RepresentationMap : Array<IfcRepresentationMap>// inverse
	LayerAssignments : Array<IfcPresentationLayerAssignment>// inverse
	OfProductRepresentation : Array<IfcProductRepresentation>// inverse

    constructor(contextOfItems : IfcRepresentationContext, items : Array<IfcRepresentationItem>) {
        super()
		this.RepresentationMap = new Array<IfcRepresentationMap>()
		this.LayerAssignments = new Array<IfcPresentationLayerAssignment>()
		this.OfProductRepresentation = new Array<IfcProductRepresentation>()

		this.ContextOfItems = contextOfItems
		this.Items = items

    }
}