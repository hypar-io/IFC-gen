
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcStructuralLoadStatic} from "./IfcStructuralLoadStatic.g"
import {IfcSurfaceReinforcementArea} from "./IfcSurfaceReinforcementArea.g"
import {IfcStructuralLoad} from "./IfcStructuralLoad.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadorresult.htm
export abstract class IfcStructuralLoadOrResult extends IfcStructuralLoad {

    constructor() {
        super()

    }
}