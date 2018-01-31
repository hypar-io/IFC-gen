
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcDraughtingPreDefinedCurveFont} from "./IfcDraughtingPreDefinedCurveFont"
import {IfcPreDefinedItem} from "./IfcPreDefinedItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedcurvefont.htm
export abstract class IfcPreDefinedCurveFont extends IfcPreDefinedItem {

    constructor(name : IfcLabel) {
        super(name)

    }
}