
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcDefinitionSelect} from "./IfcDefinitionSelect.g"
import {IfcMaterialSelect} from "./IfcMaterialSelect.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesmaterial.htm
export class IfcRelAssociatesMaterial extends IfcRelAssociates {
	RelatingMaterial : IfcMaterialSelect

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcDefinitionSelect>, relatingMaterial : IfcMaterialSelect) {
        super(globalId,relatedObjects)

		this.RelatingMaterial = relatingMaterial

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? this.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.RelatingMaterial != null ? this.toStepValue(this.RelatingMaterial) : "$");

        return parameters.join();
    }
}