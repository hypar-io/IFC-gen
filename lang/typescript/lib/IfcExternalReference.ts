
import {BaseIfc} from "./BaseIfc"
import {IfcURIReference} from "./IfcURIReference"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcLabel} from "./IfcLabel"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcClassificationReference} from "./IfcClassificationReference"
import {IfcDocumentReference} from "./IfcDocumentReference"
import {IfcExternallyDefinedHatchStyle} from "./IfcExternallyDefinedHatchStyle"
import {IfcExternallyDefinedSurfaceStyle} from "./IfcExternallyDefinedSurfaceStyle"
import {IfcExternallyDefinedTextFont} from "./IfcExternallyDefinedTextFont"
import {IfcLibraryReference} from "./IfcLibraryReference"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternalreference.htm
export abstract class IfcExternalReference extends BaseIfc {
	Location : IfcURIReference// optional
	Identification : IfcIdentifier// optional
	Name : IfcLabel// optional
	ExternalReferenceForResources : Array<IfcExternalReferenceRelationship>// inverse

    constructor() {
        super()
		this.ExternalReferenceForResources = new Array<IfcExternalReferenceRelationship>()

    }
}