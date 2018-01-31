
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcDraughtingPreDefinedColour} from "./IfcDraughtingPreDefinedColour"
import {IfcPreDefinedItem} from "./IfcPreDefinedItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedcolour.htm
export abstract class IfcPreDefinedColour extends IfcPreDefinedItem {

    constructor(name : IfcLabel) {
        super(name)

    }
}