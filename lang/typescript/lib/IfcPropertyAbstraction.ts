
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcExtendedProperties} from "./IfcExtendedProperties"
import {IfcPreDefinedProperties} from "./IfcPreDefinedProperties"
import {IfcProperty} from "./IfcProperty"
import {IfcPropertyEnumeration} from "./IfcPropertyEnumeration"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyabstraction.htm
export abstract class IfcPropertyAbstraction extends BaseIfc {
	HasExternalReferences : Array<IfcExternalReferenceRelationship>// inverse

    constructor() {
        super()
		this.HasExternalReferences = new Array<IfcExternalReferenceRelationship>()

    }
}