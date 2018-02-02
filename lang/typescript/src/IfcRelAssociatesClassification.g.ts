
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition.g"
import {IfcClassification} from "./IfcClassification.g"
import {IfcClassificationReference} from "./IfcClassificationReference.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesclassification.htm
 */
export class IfcRelAssociatesClassification extends IfcRelAssociates {
	RelatingClassification : IfcClassification|IfcClassificationReference

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition|IfcPropertyDefinition>, relatingClassification : IfcClassification|IfcClassificationReference) {
        super(globalId,relatedObjects)

		this.RelatingClassification = relatingClassification

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? BaseIfc.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.RelatingClassification != null ? BaseIfc.toStepValue(this.RelatingClassification) : "$");

        return parameters.join();
    }
}