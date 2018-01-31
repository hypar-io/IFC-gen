
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcText} from "./IfcText"
import {IfcPropertySet} from "./IfcPropertySet"
import {IfcPropertyDependencyRelationship} from "./IfcPropertyDependencyRelationship"
import {IfcComplexProperty} from "./IfcComplexProperty"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship"
import {IfcValue} from "./IfcValue"
import {IfcUnit} from "./IfcUnit"
import {IfcSimpleProperty} from "./IfcSimpleProperty"

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