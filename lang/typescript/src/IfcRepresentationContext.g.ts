
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcRepresentation} from "./IfcRepresentation.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationcontext.htm
 */
export abstract class IfcRepresentationContext extends BaseIfc {
	ContextIdentifier : IfcLabel // optional
	ContextType : IfcLabel // optional
	RepresentationsInContext : Array<IfcRepresentation> // inverse

    constructor() {
        super()
		this.RepresentationsInContext = new Array<IfcRepresentation>()

    }
}