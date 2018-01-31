
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcDocumentInformation} from "./IfcDocumentInformation.g"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentinformationrelationship.htm
export class IfcDocumentInformationRelationship extends IfcResourceLevelRelationship {
	RelatingDocument : IfcDocumentInformation
	RelatedDocuments : Array<IfcDocumentInformation>
	RelationshipType : IfcLabel// optional

    constructor(relatingDocument : IfcDocumentInformation, relatedDocuments : Array<IfcDocumentInformation>) {
        super()

		this.RelatingDocument = relatingDocument
		this.RelatedDocuments = relatedDocuments

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingDocument != null ? this.toStepValue(this.RelatingDocument) : "$");
		parameters.push(this.RelatedDocuments != null ? this.toStepValue(this.RelatedDocuments) : "$");
		parameters.push(this.RelationshipType != null ? this.toStepValue(this.RelationshipType) : "$");

        return parameters.join();
    }
}