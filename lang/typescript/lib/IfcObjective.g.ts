
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcConstraintEnum} from "./IfcConstraintEnum"
import {IfcActorSelect} from "./IfcActorSelect"
import {IfcDateTime} from "./IfcDateTime"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship"
import {IfcConstraint} from "./IfcConstraint"
import {IfcLogicalOperatorEnum} from "./IfcLogicalOperatorEnum"
import {IfcObjectiveEnum} from "./IfcObjectiveEnum"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjective.htm
export class IfcObjective extends IfcConstraint {
	BenchmarkValues : Array<IfcConstraint>// optional
	LogicalAggregator : IfcLogicalOperatorEnum// optional
	ObjectiveQualifier : IfcObjectiveEnum
	UserDefinedQualifier : IfcLabel// optional

    constructor(name : IfcLabel, constraintGrade : IfcConstraintEnum, objectiveQualifier : IfcObjectiveEnum) {
        super(name,constraintGrade)
		this.BenchmarkValues = new Array<IfcConstraint>()

		this.ObjectiveQualifier = objectiveQualifier

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.toStepValue(this.ConstraintGrade));
		parameters.push(this.ConstraintSource != null ? this.toStepValue(this.ConstraintSource) : "$");
		parameters.push(this.CreatingActor != null ? this.toStepValue(this.CreatingActor) : "$");
		parameters.push(this.CreationTime != null ? this.toStepValue(this.CreationTime) : "$");
		parameters.push(this.UserDefinedGrade != null ? this.toStepValue(this.UserDefinedGrade) : "$");
		parameters.push(this.BenchmarkValues != null ? this.toStepValue(this.BenchmarkValues) : "$");
		parameters.push(this.toStepValue(this.LogicalAggregator));
		parameters.push(this.toStepValue(this.ObjectiveQualifier));
		parameters.push(this.UserDefinedQualifier != null ? this.toStepValue(this.UserDefinedQualifier) : "$");

        return parameters.join();
    }
}