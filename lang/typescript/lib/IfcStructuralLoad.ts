
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcStructuralLoadConfiguration} from "./IfcStructuralLoadConfiguration"
import {IfcStructuralLoadOrResult} from "./IfcStructuralLoadOrResult"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralload.htm
export abstract class IfcStructuralLoad extends BaseIfc {
	Name : IfcLabel// optional

    constructor() {
        super()

    }
}