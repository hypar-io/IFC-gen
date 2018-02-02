
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition.g"
import {IfcDocumentInformation} from "./IfcDocumentInformation.g"
import {IfcDocumentReference} from "./IfcDocumentReference.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesdocument.htm
 */
export class IfcRelAssociatesDocument extends IfcRelAssociates {
	RelatingDocument : IfcDocumentInformation|IfcDocumentReference

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition|IfcPropertyDefinition>, relatingDocument : IfcDocumentInformation|IfcDocumentReference) {
        super(globalId,relatedObjects)

		this.RelatingDocument = relatingDocument

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? BaseIfc.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.RelatingDocument != null ? BaseIfc.toStepValue(this.RelatingDocument) : "$");

        return parameters.join();
    }
}