
import {BaseIfc} from "./BaseIfc"
import {IfcRepresentationContext} from "./IfcRepresentationContext.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcRepresentationItem} from "./IfcRepresentationItem.g"
import {IfcRepresentationMap} from "./IfcRepresentationMap.g"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcProductRepresentation} from "./IfcProductRepresentation.g"
import {IfcShapeModel} from "./IfcShapeModel.g"
import {IfcStyleModel} from "./IfcStyleModel.g"

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