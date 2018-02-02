
import {BaseIfc} from "./BaseIfc"
import {IfcURIReference} from "./IfcURIReference.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternalreference.htm
 */
export abstract class IfcExternalReference extends BaseIfc {
	Location : IfcURIReference // optional
	Identification : IfcIdentifier // optional
	Name : IfcLabel // optional
	ExternalReferenceForResources : Array<IfcExternalReferenceRelationship> // inverse

    constructor() {
        super()
		this.ExternalReferenceForResources = new Array<IfcExternalReferenceRelationship>()

    }
}