
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcRepresentation} from "./IfcRepresentation"
import {IfcGeometricRepresentationContext} from "./IfcGeometricRepresentationContext"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationcontext.htm
export abstract class IfcRepresentationContext extends BaseIfc {
	ContextIdentifier : IfcLabel// optional
	ContextType : IfcLabel// optional
	RepresentationsInContext : Array<IfcRepresentation>// inverse

    constructor() {
        super()
		this.RepresentationsInContext = new Array<IfcRepresentation>()

    }
}