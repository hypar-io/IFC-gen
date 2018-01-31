
import {BaseIfc} from "./BaseIfc"
import {IfcRepresentationContext} from "./IfcRepresentationContext.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcRepresentationItem} from "./IfcRepresentationItem.g"
import {IfcRepresentationMap} from "./IfcRepresentationMap.g"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcProductRepresentation} from "./IfcProductRepresentation.g"
import {IfcShapeAspect} from "./IfcShapeAspect.g"
import {IfcShapeRepresentation} from "./IfcShapeRepresentation.g"
import {IfcTopologyRepresentation} from "./IfcTopologyRepresentation.g"
import {IfcRepresentation} from "./IfcRepresentation.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshapemodel.htm
export abstract class IfcShapeModel extends IfcRepresentation {
	OfShapeAspect : Array<IfcShapeAspect>// inverse

    constructor(contextOfItems : IfcRepresentationContext, items : Array<IfcRepresentationItem>) {
        super(contextOfItems,items)
		this.OfShapeAspect = new Array<IfcShapeAspect>()

    }
}