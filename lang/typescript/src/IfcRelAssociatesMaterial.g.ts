
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition.g"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition.g"
import {IfcMaterialList} from "./IfcMaterialList.g"
import {IfcMaterialUsageDefinition} from "./IfcMaterialUsageDefinition.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesmaterial.htm
 */
export class IfcRelAssociatesMaterial extends IfcRelAssociates {
	RelatingMaterial : IfcMaterialDefinition|IfcMaterialList|IfcMaterialUsageDefinition

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition|IfcPropertyDefinition>, relatingMaterial : IfcMaterialDefinition|IfcMaterialList|IfcMaterialUsageDefinition) {
        super(globalId,relatedObjects)

		this.RelatingMaterial = relatingMaterial

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? BaseIfc.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.RelatingMaterial != null ? BaseIfc.toStepValue(this.RelatingMaterial) : "$");

        return parameters.join();
    }
}