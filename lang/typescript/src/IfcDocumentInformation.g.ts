
import {BaseIfc} from "./BaseIfc"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcURIReference} from "./IfcURIReference.g"
import {IfcActorSelect} from "./IfcActorSelect.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcDate} from "./IfcDate.g"
import {IfcDocumentConfidentialityEnum} from "./IfcDocumentConfidentialityEnum.g"
import {IfcDocumentStatusEnum} from "./IfcDocumentStatusEnum.g"
import {IfcRelAssociatesDocument} from "./IfcRelAssociatesDocument.g"
import {IfcDocumentReference} from "./IfcDocumentReference.g"
import {IfcDocumentInformationRelationship} from "./IfcDocumentInformationRelationship.g"
import {IfcExternalInformation} from "./IfcExternalInformation.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentinformation.htm
export class IfcDocumentInformation extends IfcExternalInformation {
	Identification : IfcIdentifier
	Name : IfcLabel
	Description : IfcText// optional
	Location : IfcURIReference// optional
	Purpose : IfcText// optional
	IntendedUse : IfcText// optional
	Scope : IfcText// optional
	Revision : IfcLabel// optional
	DocumentOwner : IfcActorSelect// optional
	Editors : Array<IfcActorSelect>// optional
	CreationTime : IfcDateTime// optional
	LastRevisionTime : IfcDateTime// optional
	ElectronicFormat : IfcIdentifier// optional
	ValidFrom : IfcDate// optional
	ValidUntil : IfcDate// optional
	Confidentiality : IfcDocumentConfidentialityEnum// optional
	Status : IfcDocumentStatusEnum// optional
	DocumentInfoForObjects : Array<IfcRelAssociatesDocument>// inverse
	HasDocumentReferences : Array<IfcDocumentReference>// inverse
	IsPointedTo : Array<IfcDocumentInformationRelationship>// inverse
	IsPointer : Array<IfcDocumentInformationRelationship>// inverse

    constructor(identification : IfcIdentifier, name : IfcLabel) {
        super()
		this.Editors = new Array<IfcActorSelect>()
		this.DocumentInfoForObjects = new Array<IfcRelAssociatesDocument>()
		this.HasDocumentReferences = new Array<IfcDocumentReference>()
		this.IsPointedTo = new Array<IfcDocumentInformationRelationship>()
		this.IsPointer = new Array<IfcDocumentInformationRelationship>()

		this.Identification = identification
		this.Name = name

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Identification != null ? this.toStepValue(this.Identification) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Location != null ? this.toStepValue(this.Location) : "$");
		parameters.push(this.Purpose != null ? this.toStepValue(this.Purpose) : "$");
		parameters.push(this.IntendedUse != null ? this.toStepValue(this.IntendedUse) : "$");
		parameters.push(this.Scope != null ? this.toStepValue(this.Scope) : "$");
		parameters.push(this.Revision != null ? this.toStepValue(this.Revision) : "$");
		parameters.push(this.DocumentOwner != null ? this.toStepValue(this.DocumentOwner) : "$");
		parameters.push(this.Editors != null ? this.toStepValue(this.Editors) : "$");
		parameters.push(this.CreationTime != null ? this.toStepValue(this.CreationTime) : "$");
		parameters.push(this.LastRevisionTime != null ? this.toStepValue(this.LastRevisionTime) : "$");
		parameters.push(this.ElectronicFormat != null ? this.toStepValue(this.ElectronicFormat) : "$");
		parameters.push(this.ValidFrom != null ? this.toStepValue(this.ValidFrom) : "$");
		parameters.push(this.ValidUntil != null ? this.toStepValue(this.ValidUntil) : "$");
		parameters.push(this.toStepValue(this.Confidentiality));
		parameters.push(this.toStepValue(this.Status));

        return parameters.join();
    }
}