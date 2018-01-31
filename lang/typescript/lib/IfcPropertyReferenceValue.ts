
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcText} from "./IfcText"
import {IfcPropertySet} from "./IfcPropertySet"
import {IfcPropertyDependencyRelationship} from "./IfcPropertyDependencyRelationship"
import {IfcComplexProperty} from "./IfcComplexProperty"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship"
import {IfcObjectReferenceSelect} from "./IfcObjectReferenceSelect"
import {IfcSimpleProperty} from "./IfcSimpleProperty"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyreferencevalue.htm
export class IfcPropertyReferenceValue extends IfcSimpleProperty {
	UsageName : IfcText// optional
	PropertyReference : IfcObjectReferenceSelect// optional

    constructor(name : IfcIdentifier) {
        super(name)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.UsageName != null ? this.toStepValue(this.UsageName) : "$");
		parameters.push(this.PropertyReference != null ? this.toStepValue(this.PropertyReference) : "$");

        return parameters.join();
    }
}