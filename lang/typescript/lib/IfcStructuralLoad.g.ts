
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcStructuralLoadConfiguration} from "./IfcStructuralLoadConfiguration.g"
import {IfcStructuralLoadOrResult} from "./IfcStructuralLoadOrResult.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralload.htm
export abstract class IfcStructuralLoad extends BaseIfc {
	Name : IfcLabel// optional

    constructor() {
        super()

    }
}