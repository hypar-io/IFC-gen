
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcStructuralLoadLinearForce} from "./IfcStructuralLoadLinearForce"
import {IfcStructuralLoadPlanarForce} from "./IfcStructuralLoadPlanarForce"
import {IfcStructuralLoadSingleDisplacement} from "./IfcStructuralLoadSingleDisplacement"
import {IfcStructuralLoadSingleForce} from "./IfcStructuralLoadSingleForce"
import {IfcStructuralLoadTemperature} from "./IfcStructuralLoadTemperature"
import {IfcStructuralLoadOrResult} from "./IfcStructuralLoadOrResult"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadstatic.htm
export abstract class IfcStructuralLoadStatic extends IfcStructuralLoadOrResult {

    constructor() {
        super()

    }
}