
import {BaseIfc} from "./BaseIfc"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcURIReference} from "./IfcURIReference.g"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcDate} from "./IfcDate.g"
import {IfcDocumentConfidentialityEnum} from "./IfcDocumentConfidentialityEnum.g"
import {IfcDocumentStatusEnum} from "./IfcDocumentStatusEnum.g"
import {IfcRelAssociatesDocument} from "./IfcRelAssociatesDocument.g"
import {IfcDocumentReference} from "./IfcDocumentReference.g"
import {IfcDocumentInformationRelationship} from "./IfcDocumentInformationRelationship.g"
import {IfcExternalInformation} from "./IfcExternalInformation.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentinformation.htm
 */
export class IfcDocumentInformation extends IfcExternalInformation {
	Identification : IfcIdentifier
	Name : IfcLabel
	Description : IfcText // optional
	Location : IfcURIReference // optional
	Purpose : IfcText // optional
	IntendedUse : IfcText // optional
	Scope : IfcText // optional
	Revision : IfcLabel // optional
	DocumentOwner : IfcOrganization|IfcPerson|IfcPersonAndOrganization // optional
	Editors : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization> // optional
	CreationTime : IfcDateTime // optional
	LastRevisionTime : IfcDateTime // optional
	ElectronicFormat : IfcIdentifier // optional
	ValidFrom : IfcDate // optional
	ValidUntil : IfcDate // optional
	Confidentiality : IfcDocumentConfidentialityEnum // optional
	Status : IfcDocumentStatusEnum // optional
	DocumentInfoForObjects : Array<IfcRelAssociatesDocument> // inverse
	HasDocumentReferences : Array<IfcDocumentReference> // inverse
	IsPointedTo : Array<IfcDocumentInformationRelationship> // inverse
	IsPointer : Array<IfcDocumentInformationRelationship> // inverse

    constructor(identification : IfcIdentifier, name : IfcLabel) {
        super()
		this.Editors = new Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization>()
		this.DocumentInfoForObjects = new Array<IfcRelAssociatesDocument>()
		this.HasDocumentReferences = new Array<IfcDocumentReference>()
		this.IsPointedTo = new Array<IfcDocumentInformationRelationship>()
		this.IsPointer = new Array<IfcDocumentInformationRelationship>()

		this.Identification = identification
		this.Name = name

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Identification != null ? BaseIfc.toStepValue(this.Identification) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.Location != null ? BaseIfc.toStepValue(this.Location) : "$");
		parameters.push(this.Purpose != null ? BaseIfc.toStepValue(this.Purpose) : "$");
		parameters.push(this.IntendedUse != null ? BaseIfc.toStepValue(this.IntendedUse) : "$");
		parameters.push(this.Scope != null ? BaseIfc.toStepValue(this.Scope) : "$");
		parameters.push(this.Revision != null ? BaseIfc.toStepValue(this.Revision) : "$");
		parameters.push(this.DocumentOwner != null ? BaseIfc.toStepValue(this.DocumentOwner) : "$");
		parameters.push(this.Editors != null ? BaseIfc.toStepValue(this.Editors) : "$");
		parameters.push(this.CreationTime != null ? BaseIfc.toStepValue(this.CreationTime) : "$");
		parameters.push(this.LastRevisionTime != null ? BaseIfc.toStepValue(this.LastRevisionTime) : "$");
		parameters.push(this.ElectronicFormat != null ? BaseIfc.toStepValue(this.ElectronicFormat) : "$");
		parameters.push(this.ValidFrom != null ? BaseIfc.toStepValue(this.ValidFrom) : "$");
		parameters.push(this.ValidUntil != null ? BaseIfc.toStepValue(this.ValidUntil) : "$");
		parameters.push(BaseIfc.toStepValue(this.Confidentiality));
		parameters.push(BaseIfc.toStepValue(this.Status));

        return parameters.join();
    }
}