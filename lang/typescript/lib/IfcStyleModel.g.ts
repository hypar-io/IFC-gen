
import {BaseIfc} from "./BaseIfc"
import {IfcRepresentationContext} from "./IfcRepresentationContext"
import {IfcLabel} from "./IfcLabel"
import {IfcRepresentationItem} from "./IfcRepresentationItem"
import {IfcRepresentationMap} from "./IfcRepresentationMap"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcProductRepresentation} from "./IfcProductRepresentation"
import {IfcStyledRepresentation} from "./IfcStyledRepresentation"
import {IfcRepresentation} from "./IfcRepresentation"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstylemodel.htm
export abstract class IfcStyleModel extends IfcRepresentation {

    constructor(contextOfItems : IfcRepresentationContext, items : Array<IfcRepresentationItem>) {
        super(contextOfItems,items)

    }
}