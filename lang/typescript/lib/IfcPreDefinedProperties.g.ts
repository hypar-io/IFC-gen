
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcReinforcementBarProperties} from "./IfcReinforcementBarProperties.g"
import {IfcSectionProperties} from "./IfcSectionProperties.g"
import {IfcSectionReinforcementProperties} from "./IfcSectionReinforcementProperties.g"
import {IfcPropertyAbstraction} from "./IfcPropertyAbstraction.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedproperties.htm
export abstract class IfcPreDefinedProperties extends IfcPropertyAbstraction {

    constructor() {
        super()

    }
}