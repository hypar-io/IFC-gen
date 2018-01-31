
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcColourRgb} from "./IfcColourRgb.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolourspecification.htm
export abstract class IfcColourSpecification extends IfcPresentationItem {
	Name : IfcLabel// optional

    constructor() {
        super()

    }
}