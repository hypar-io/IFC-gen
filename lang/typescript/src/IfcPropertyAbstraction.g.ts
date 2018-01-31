
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcExtendedProperties} from "./IfcExtendedProperties.g"
import {IfcPreDefinedProperties} from "./IfcPreDefinedProperties.g"
import {IfcProperty} from "./IfcProperty.g"
import {IfcPropertyEnumeration} from "./IfcPropertyEnumeration.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyabstraction.htm
export abstract class IfcPropertyAbstraction extends BaseIfc {
	HasExternalReferences : Array<IfcExternalReferenceRelationship>// inverse

    constructor() {
        super()
		this.HasExternalReferences = new Array<IfcExternalReferenceRelationship>()

    }
}