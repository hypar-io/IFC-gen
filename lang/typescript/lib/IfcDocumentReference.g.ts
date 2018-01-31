
import {BaseIfc} from "./BaseIfc"
import {IfcURIReference} from "./IfcURIReference"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcLabel} from "./IfcLabel"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcText} from "./IfcText"
import {IfcDocumentInformation} from "./IfcDocumentInformation"
import {IfcRelAssociatesDocument} from "./IfcRelAssociatesDocument"
import {IfcExternalReference} from "./IfcExternalReference"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentreference.htm
export class IfcDocumentReference extends IfcExternalReference {
	Description : IfcText// optional
	ReferencedDocument : IfcDocumentInformation// optional
	DocumentRefForObjects : Array<IfcRelAssociatesDocument>// inverse

    constructor() {
        super()
		this.DocumentRefForObjects = new Array<IfcRelAssociatesDocument>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Location != null ? this.toStepValue(this.Location) : "$");
		parameters.push(this.Identification != null ? this.toStepValue(this.Identification) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ReferencedDocument != null ? this.toStepValue(this.ReferencedDocument) : "$");

        return parameters.join();
    }
}