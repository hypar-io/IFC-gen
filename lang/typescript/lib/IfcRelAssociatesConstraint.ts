
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcDefinitionSelect} from "./IfcDefinitionSelect"
import {IfcConstraint} from "./IfcConstraint"
import {IfcRelAssociates} from "./IfcRelAssociates"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesconstraint.htm
export class IfcRelAssociatesConstraint extends IfcRelAssociates {
	Intent : IfcLabel// optional
	RelatingConstraint : IfcConstraint

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcDefinitionSelect>, relatingConstraint : IfcConstraint) {
        super(globalId,relatedObjects)

		this.RelatingConstraint = relatingConstraint

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? this.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.Intent != null ? this.toStepValue(this.Intent) : "$");
		parameters.push(this.RelatingConstraint != null ? this.toStepValue(this.RelatingConstraint) : "$");

        return parameters.join();
    }
}