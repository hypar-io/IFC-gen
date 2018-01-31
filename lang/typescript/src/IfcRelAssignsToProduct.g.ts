
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum.g"
import {IfcProductSelect} from "./IfcProductSelect.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoproduct.htm
export class IfcRelAssignsToProduct extends IfcRelAssigns {
	RelatingProduct : IfcProductSelect

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>, relatingProduct : IfcProductSelect) {
        super(globalId,relatedObjects)

		this.RelatingProduct = relatingProduct

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? this.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.toStepValue(this.RelatedObjectsType));
		parameters.push(this.RelatingProduct != null ? this.toStepValue(this.RelatingProduct) : "$");

        return parameters.join();
    }
}