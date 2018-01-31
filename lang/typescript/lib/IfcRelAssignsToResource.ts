
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcObjectDefinition} from "./IfcObjectDefinition"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum"
import {IfcResourceSelect} from "./IfcResourceSelect"
import {IfcRelAssigns} from "./IfcRelAssigns"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoresource.htm
export class IfcRelAssignsToResource extends IfcRelAssigns {
	RelatingResource : IfcResourceSelect

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>, relatingResource : IfcResourceSelect) {
        super(globalId,relatedObjects)

		this.RelatingResource = relatingResource

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? this.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.toStepValue(this.RelatedObjectsType));
		parameters.push(this.RelatingResource != null ? this.toStepValue(this.RelatingResource) : "$");

        return parameters.join();
    }
}