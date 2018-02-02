
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefineditem.htm
 */
export abstract class IfcPreDefinedItem extends IfcPresentationItem {
	Name : IfcLabel

    constructor(name : IfcLabel) {
        super()

		this.Name = name

    }
}