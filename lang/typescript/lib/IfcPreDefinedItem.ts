
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcPreDefinedColour} from "./IfcPreDefinedColour"
import {IfcPreDefinedCurveFont} from "./IfcPreDefinedCurveFont"
import {IfcPreDefinedTextFont} from "./IfcPreDefinedTextFont"
import {IfcPresentationItem} from "./IfcPresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefineditem.htm
export abstract class IfcPreDefinedItem extends IfcPresentationItem {
	Name : IfcLabel

    constructor(name : IfcLabel) {
        super()

		this.Name = name

    }
}