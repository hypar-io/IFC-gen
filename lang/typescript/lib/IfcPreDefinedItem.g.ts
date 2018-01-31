
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcPreDefinedColour} from "./IfcPreDefinedColour.g"
import {IfcPreDefinedCurveFont} from "./IfcPreDefinedCurveFont.g"
import {IfcPreDefinedTextFont} from "./IfcPreDefinedTextFont.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefineditem.htm
export abstract class IfcPreDefinedItem extends IfcPresentationItem {
	Name : IfcLabel

    constructor(name : IfcLabel) {
        super()

		this.Name = name

    }
}