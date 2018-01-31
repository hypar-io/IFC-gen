
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcReinforcementBarProperties} from "./IfcReinforcementBarProperties"
import {IfcSectionProperties} from "./IfcSectionProperties"
import {IfcSectionReinforcementProperties} from "./IfcSectionReinforcementProperties"
import {IfcPropertyAbstraction} from "./IfcPropertyAbstraction"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedproperties.htm
export abstract class IfcPreDefinedProperties extends IfcPropertyAbstraction {

    constructor() {
        super()

    }
}