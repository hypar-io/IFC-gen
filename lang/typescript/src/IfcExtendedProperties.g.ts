
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcText} from "./IfcText.g"
import {IfcProperty} from "./IfcProperty.g"
import {IfcPropertyAbstraction} from "./IfcPropertyAbstraction.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcextendedproperties.htm
 */
export abstract class IfcExtendedProperties extends IfcPropertyAbstraction {
	Name : IfcIdentifier // optional
	Description : IfcText // optional
	Properties : Array<IfcProperty>

    constructor(properties : Array<IfcProperty>) {
        super()

		this.Properties = properties

    }
}