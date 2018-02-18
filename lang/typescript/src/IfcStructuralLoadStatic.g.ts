
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcStructuralLoadOrResult} from "./IfcStructuralLoadOrResult.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadstatic.htm
 */
export abstract class IfcStructuralLoadStatic extends IfcStructuralLoadOrResult {

    constructor() {
        super()
    }
}