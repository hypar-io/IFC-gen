
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum.g"
import {IfcActor} from "./IfcActor.g"
import {IfcActorRole} from "./IfcActorRole.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoactor.htm
 */
export class IfcRelAssignsToActor extends IfcRelAssigns {
	RelatingActor : IfcActor
	ActingRole : IfcActorRole // optional

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>, relatingActor : IfcActor) {
        super(globalId,relatedObjects)

		this.RelatingActor = relatingActor

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? BaseIfc.toStepValue(this.RelatedObjects) : "$");
		parameters.push(BaseIfc.toStepValue(this.RelatedObjectsType));
		parameters.push(this.RelatingActor != null ? BaseIfc.toStepValue(this.RelatingActor) : "$");
		parameters.push(this.ActingRole != null ? BaseIfc.toStepValue(this.ActingRole) : "$");

        return parameters.join();
    }
}