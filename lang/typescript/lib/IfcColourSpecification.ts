
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcColourRgb} from "./IfcColourRgb"
import {IfcPresentationItem} from "./IfcPresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolourspecification.htm
export abstract class IfcColourSpecification extends IfcPresentationItem {
	Name : IfcLabel// optional

    constructor() {
        super()

    }
}