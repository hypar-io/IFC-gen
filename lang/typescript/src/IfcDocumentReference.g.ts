
import {BaseIfc} from "./BaseIfc"
import {IfcURIReference} from "./IfcURIReference.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcText} from "./IfcText.g"
import {IfcDocumentInformation} from "./IfcDocumentInformation.g"
import {IfcRelAssociatesDocument} from "./IfcRelAssociatesDocument.g"
import {IfcExternalReference} from "./IfcExternalReference.g"

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