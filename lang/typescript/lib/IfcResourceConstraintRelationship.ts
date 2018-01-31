
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcConstraint} from "./IfcConstraint"
import {IfcResourceObjectSelect} from "./IfcResourceObjectSelect"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresourceconstraintrelationship.htm
export class IfcResourceConstraintRelationship extends IfcResourceLevelRelationship {
	RelatingConstraint : IfcConstraint
	RelatedResourceObjects : Array<IfcResourceObjectSelect>

    constructor(relatingConstraint : IfcConstraint, relatedResourceObjects : Array<IfcResourceObjectSelect>) {
        super()

		this.RelatingConstraint = relatingConstraint
		this.RelatedResourceObjects = relatedResourceObjects

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingConstraint != null ? this.toStepValue(this.RelatingConstraint) : "$");
		parameters.push(this.RelatedResourceObjects != null ? this.toStepValue(this.RelatedResourceObjects) : "$");

        return parameters.join();
    }
}