
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcDraughtingPreDefinedCurveFont} from "./IfcDraughtingPreDefinedCurveFont.g"
import {IfcPreDefinedItem} from "./IfcPreDefinedItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedcurvefont.htm
export abstract class IfcPreDefinedCurveFont extends IfcPreDefinedItem {

    constructor(name : IfcLabel) {
        super(name)

    }
}