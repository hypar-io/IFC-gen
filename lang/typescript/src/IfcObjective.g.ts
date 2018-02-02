
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcConstraintEnum} from "./IfcConstraintEnum.g"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship.g"
import {IfcConstraint} from "./IfcConstraint.g"
import {IfcLogicalOperatorEnum} from "./IfcLogicalOperatorEnum.g"
import {IfcObjectiveEnum} from "./IfcObjectiveEnum.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjective.htm
 */
export class IfcObjective extends IfcConstraint {
	BenchmarkValues : Array<IfcConstraint> // optional
	LogicalAggregator : IfcLogicalOperatorEnum // optional
	ObjectiveQualifier : IfcObjectiveEnum
	UserDefinedQualifier : IfcLabel // optional

    constructor(name : IfcLabel, constraintGrade : IfcConstraintEnum, objectiveQualifier : IfcObjectiveEnum) {
        super(name,constraintGrade)
		this.BenchmarkValues = new Array<IfcConstraint>()

		this.ObjectiveQualifier = objectiveQualifier

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(BaseIfc.toStepValue(this.ConstraintGrade));
		parameters.push(this.ConstraintSource != null ? BaseIfc.toStepValue(this.ConstraintSource) : "$");
		parameters.push(this.CreatingActor != null ? BaseIfc.toStepValue(this.CreatingActor) : "$");
		parameters.push(this.CreationTime != null ? BaseIfc.toStepValue(this.CreationTime) : "$");
		parameters.push(this.UserDefinedGrade != null ? BaseIfc.toStepValue(this.UserDefinedGrade) : "$");
		parameters.push(this.BenchmarkValues != null ? BaseIfc.toStepValue(this.BenchmarkValues) : "$");
		parameters.push(BaseIfc.toStepValue(this.LogicalAggregator));
		parameters.push(BaseIfc.toStepValue(this.ObjectiveQualifier));
		parameters.push(this.UserDefinedQualifier != null ? BaseIfc.toStepValue(this.UserDefinedQualifier) : "$");

        return parameters.join();
    }
}