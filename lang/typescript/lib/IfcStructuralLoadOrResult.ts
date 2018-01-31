
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcStructuralLoadStatic} from "./IfcStructuralLoadStatic"
import {IfcSurfaceReinforcementArea} from "./IfcSurfaceReinforcementArea"
import {IfcStructuralLoad} from "./IfcStructuralLoad"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadorresult.htm
export abstract class IfcStructuralLoadOrResult extends IfcStructuralLoad {

    constructor() {
        super()

    }
}