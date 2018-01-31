
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcConstraintEnum} from "./IfcConstraintEnum"
import {IfcActorSelect} from "./IfcActorSelect"
import {IfcDateTime} from "./IfcDateTime"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship"
import {IfcBenchmarkEnum} from "./IfcBenchmarkEnum"
import {IfcMetricValueSelect} from "./IfcMetricValueSelect"
import {IfcReference} from "./IfcReference"
import {IfcConstraint} from "./IfcConstraint"

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