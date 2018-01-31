
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcObjectDefinition} from "./IfcObjectDefinition"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum"
import {IfcControl} from "./IfcControl"
import {IfcRelAssigns} from "./IfcRelAssigns"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstocontrol.htm
export class IfcRelAssignsToControl extends IfcRelAssigns {
	RelatingControl : IfcControl

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>, relatingControl : IfcControl) {
        super(globalId,relatedObjects)

		this.RelatingControl = relatingControl

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? this.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.toStepValue(this.RelatedObjectsType));
		parameters.push(this.RelatingControl != null ? this.toStepValue(this.RelatingControl) : "$");

        return parameters.join();
    }
}