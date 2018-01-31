
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcStructuralLoadLinearForce} from "./IfcStructuralLoadLinearForce.g"
import {IfcStructuralLoadPlanarForce} from "./IfcStructuralLoadPlanarForce.g"
import {IfcStructuralLoadSingleDisplacement} from "./IfcStructuralLoadSingleDisplacement.g"
import {IfcStructuralLoadSingleForce} from "./IfcStructuralLoadSingleForce.g"
import {IfcStructuralLoadTemperature} from "./IfcStructuralLoadTemperature.g"
import {IfcStructuralLoadOrResult} from "./IfcStructuralLoadOrResult.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadstatic.htm
export abstract class IfcStructuralLoadStatic extends IfcStructuralLoadOrResult {

    constructor() {
        super()

    }
}