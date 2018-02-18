
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcPreDefinedItem} from "./IfcPreDefinedItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedtextfont.htm
 */
export abstract class IfcPreDefinedTextFont extends IfcPreDefinedItem {

    constructor(name : IfcLabel) {
        super(name)
    }
}