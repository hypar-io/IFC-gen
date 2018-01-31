
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcObjectDefinition} from "./IfcObjectDefinition"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum"
import {IfcActor} from "./IfcActor"
import {IfcActorRole} from "./IfcActorRole"
import {IfcRelAssigns} from "./IfcRelAssigns"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoactor.htm
export class IfcRelAssignsToActor extends IfcRelAssigns {
	RelatingActor : IfcActor
	ActingRole : IfcActorRole// optional

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>, relatingActor : IfcActor) {
        super(globalId,relatedObjects)

		this.RelatingActor = relatingActor

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? this.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.toStepValue(this.RelatedObjectsType));
		parameters.push(this.RelatingActor != null ? this.toStepValue(this.RelatingActor) : "$");
		parameters.push(this.ActingRole != null ? this.toStepValue(this.ActingRole) : "$");

        return parameters.join();
    }
}