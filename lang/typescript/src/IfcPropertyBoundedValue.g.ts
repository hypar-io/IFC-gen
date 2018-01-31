
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcText} from "./IfcText.g"
import {IfcPropertySet} from "./IfcPropertySet.g"
import {IfcPropertyDependencyRelationship} from "./IfcPropertyDependencyRelationship.g"
import {IfcComplexProperty} from "./IfcComplexProperty.g"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship.g"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship.g"
import {IfcValue} from "./IfcValue.g"
import {IfcUnit} from "./IfcUnit.g"
import {IfcSimpleProperty} from "./IfcSimpleProperty.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyboundedvalue.htm
export class IfcPropertyBoundedValue extends IfcSimpleProperty {
	UpperBoundValue : IfcValue// optional
	LowerBoundValue : IfcValue// optional
	Unit : IfcUnit// optional
	SetPointValue : IfcValue// optional

    constructor(name : IfcIdentifier) {
        super(name)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.UpperBoundValue != null ? this.toStepValue(this.UpperBoundValue) : "$");
		parameters.push(this.LowerBoundValue != null ? this.toStepValue(this.LowerBoundValue) : "$");
		parameters.push(this.Unit != null ? this.toStepValue(this.Unit) : "$");
		parameters.push(this.SetPointValue != null ? this.toStepValue(this.SetPointValue) : "$");

        return parameters.join();
    }
}