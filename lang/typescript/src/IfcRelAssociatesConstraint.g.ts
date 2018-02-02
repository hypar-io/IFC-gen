
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition.g"
import {IfcConstraint} from "./IfcConstraint.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesconstraint.htm
 */
export class IfcRelAssociatesConstraint extends IfcRelAssociates {
	Intent : IfcLabel // optional
	RelatingConstraint : IfcConstraint

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition|IfcPropertyDefinition>, relatingConstraint : IfcConstraint) {
        super(globalId,relatedObjects)

		this.RelatingConstraint = relatingConstraint

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? BaseIfc.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.Intent != null ? BaseIfc.toStepValue(this.Intent) : "$");
		parameters.push(this.RelatingConstraint != null ? BaseIfc.toStepValue(this.RelatingConstraint) : "$");

        return parameters.join();
    }
}