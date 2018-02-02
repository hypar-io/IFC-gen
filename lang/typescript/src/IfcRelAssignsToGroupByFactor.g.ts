
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum.g"
import {IfcGroup} from "./IfcGroup.g"
import {IfcRatioMeasure} from "./IfcRatioMeasure.g"
import {IfcRelAssignsToGroup} from "./IfcRelAssignsToGroup.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstogroupbyfactor.htm
 */
export class IfcRelAssignsToGroupByFactor extends IfcRelAssignsToGroup {
	Factor : IfcRatioMeasure

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>, relatingGroup : IfcGroup, factor : IfcRatioMeasure) {
        super(globalId,relatedObjects,relatingGroup)

		this.Factor = factor

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? BaseIfc.toStepValue(this.RelatedObjects) : "$");
		parameters.push(BaseIfc.toStepValue(this.RelatedObjectsType));
		parameters.push(this.RelatingGroup != null ? BaseIfc.toStepValue(this.RelatingGroup) : "$");
		parameters.push(this.Factor != null ? BaseIfc.toStepValue(this.Factor) : "$");

        return parameters.join();
    }
}