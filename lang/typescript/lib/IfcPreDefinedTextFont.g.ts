
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcTextStyleFontModel} from "./IfcTextStyleFontModel"
import {IfcPreDefinedItem} from "./IfcPreDefinedItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedtextfont.htm
export abstract class IfcPreDefinedTextFont extends IfcPreDefinedItem {

    constructor(name : IfcLabel) {
        super(name)

    }
}