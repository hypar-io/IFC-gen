
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcAppliedValueSelect} from "./IfcAppliedValueSelect"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit"
import {IfcDate} from "./IfcDate"
import {IfcArithmeticOperatorEnum} from "./IfcArithmeticOperatorEnum"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcCostValue} from "./IfcCostValue"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcappliedvalue.htm
export class IfcAppliedValue extends BaseIfc {
	Name : IfcLabel// optional
	Description : IfcText// optional
	AppliedValue : IfcAppliedValueSelect// optional
	UnitBasis : IfcMeasureWithUnit// optional
	ApplicableDate : IfcDate// optional
	FixedUntilDate : IfcDate// optional
	Category : IfcLabel// optional
	Condition : IfcLabel// optional
	ArithmeticOperator : IfcArithmeticOperatorEnum// optional
	Components : Array<IfcAppliedValue>// optional
	HasExternalReference : Array<IfcExternalReferenceRelationship>// inverse

    constructor() {
        super()
		this.Components = new Array<IfcAppliedValue>()
		this.HasExternalReference = new Array<IfcExternalReferenceRelationship>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.AppliedValue != null ? this.toStepValue(this.AppliedValue) : "$");
		parameters.push(this.UnitBasis != null ? this.toStepValue(this.UnitBasis) : "$");
		parameters.push(this.ApplicableDate != null ? this.toStepValue(this.ApplicableDate) : "$");
		parameters.push(this.FixedUntilDate != null ? this.toStepValue(this.FixedUntilDate) : "$");
		parameters.push(this.Category != null ? this.toStepValue(this.Category) : "$");
		parameters.push(this.Condition != null ? this.toStepValue(this.Condition) : "$");
		parameters.push(this.toStepValue(this.ArithmeticOperator));
		parameters.push(this.Components != null ? this.toStepValue(this.Components) : "$");

        return parameters.join();
    }
}