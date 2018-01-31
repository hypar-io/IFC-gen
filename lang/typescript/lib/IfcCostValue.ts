
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcAppliedValueSelect} from "./IfcAppliedValueSelect"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit"
import {IfcDate} from "./IfcDate"
import {IfcArithmeticOperatorEnum} from "./IfcArithmeticOperatorEnum"
import {IfcAppliedValue} from "./IfcAppliedValue"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccostvalue.htm
export class IfcCostValue extends IfcAppliedValue {

    constructor() {
        super()

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