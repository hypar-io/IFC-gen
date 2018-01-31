
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcConstraintEnum} from "./IfcConstraintEnum.g"
import {IfcActorSelect} from "./IfcActorSelect.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship.g"
import {IfcBenchmarkEnum} from "./IfcBenchmarkEnum.g"
import {IfcMetricValueSelect} from "./IfcMetricValueSelect.g"
import {IfcReference} from "./IfcReference.g"
import {IfcConstraint} from "./IfcConstraint.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmetric.htm
export class IfcMetric extends IfcConstraint {
	Benchmark : IfcBenchmarkEnum
	ValueSource : IfcLabel// optional
	DataValue : IfcMetricValueSelect// optional
	ReferencePath : IfcReference// optional

    constructor(name : IfcLabel, constraintGrade : IfcConstraintEnum, benchmark : IfcBenchmarkEnum) {
        super(name,constraintGrade)

		this.Benchmark = benchmark

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
		parameters.push(this.toStepValue(this.Benchmark));
		parameters.push(this.ValueSource != null ? this.toStepValue(this.ValueSource) : "$");
		parameters.push(this.DataValue != null ? this.toStepValue(this.DataValue) : "$");
		parameters.push(this.ReferencePath != null ? this.toStepValue(this.ReferencePath) : "$");

        return parameters.join();
    }
}