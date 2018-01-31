
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcDefinitionSelect} from "./IfcDefinitionSelect"
import {IfcClassificationSelect} from "./IfcClassificationSelect"
import {IfcRelAssociates} from "./IfcRelAssociates"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesclassification.htm
export class IfcRelAssociatesClassification extends IfcRelAssociates {
	RelatingClassification : IfcClassificationSelect

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcDefinitionSelect>, relatingClassification : IfcClassificationSelect) {
        super(globalId,relatedObjects)

		this.RelatingClassification = relatingClassification

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? this.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.RelatingClassification != null ? this.toStepValue(this.RelatingClassification) : "$");

        return parameters.join();
    }
}