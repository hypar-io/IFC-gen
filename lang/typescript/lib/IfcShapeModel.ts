
import {BaseIfc} from "./BaseIfc"
import {IfcRepresentationContext} from "./IfcRepresentationContext"
import {IfcLabel} from "./IfcLabel"
import {IfcRepresentationItem} from "./IfcRepresentationItem"
import {IfcRepresentationMap} from "./IfcRepresentationMap"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcProductRepresentation} from "./IfcProductRepresentation"
import {IfcShapeAspect} from "./IfcShapeAspect"
import {IfcShapeRepresentation} from "./IfcShapeRepresentation"
import {IfcTopologyRepresentation} from "./IfcTopologyRepresentation"
import {IfcRepresentation} from "./IfcRepresentation"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshapemodel.htm
export abstract class IfcShapeModel extends IfcRepresentation {
	OfShapeAspect : Array<IfcShapeAspect>// inverse

    constructor(contextOfItems : IfcRepresentationContext, items : Array<IfcRepresentationItem>) {
        super(contextOfItems,items)
		this.OfShapeAspect = new Array<IfcShapeAspect>()

    }
}