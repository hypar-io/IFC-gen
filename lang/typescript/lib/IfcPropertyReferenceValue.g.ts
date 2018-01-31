
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcText} from "./IfcText.g"
import {IfcPropertySet} from "./IfcPropertySet.g"
import {IfcPropertyDependencyRelationship} from "./IfcPropertyDependencyRelationship.g"
import {IfcComplexProperty} from "./IfcComplexProperty.g"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship.g"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship.g"
import {IfcObjectReferenceSelect} from "./IfcObjectReferenceSelect.g"
import {IfcSimpleProperty} from "./IfcSimpleProperty.g"

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