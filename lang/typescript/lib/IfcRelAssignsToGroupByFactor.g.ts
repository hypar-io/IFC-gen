
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcObjectDefinition} from "./IfcObjectDefinition"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum"
import {IfcGroup} from "./IfcGroup"
import {IfcRatioMeasure} from "./IfcRatioMeasure"
import {IfcRelAssignsToGroup} from "./IfcRelAssignsToGroup"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstogroupbyfactor.htm
export class IfcRelAssignsToGroupByFactor extends IfcRelAssignsToGroup {
	Factor : IfcRatioMeasure

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>, relatingGroup : IfcGroup, factor : IfcRatioMeasure) {
        super(globalId,relatedObjects,relatingGroup)

		this.Factor = factor

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? this.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.toStepValue(this.RelatedObjectsType));
		parameters.push(this.RelatingGroup != null ? this.toStepValue(this.RelatingGroup) : "$");
		parameters.push(this.Factor != null ? this.toStepValue(this.Factor) : "$");

        return parameters.join();
    }
}