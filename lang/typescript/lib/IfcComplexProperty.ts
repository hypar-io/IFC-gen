
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcText} from "./IfcText"
import {IfcPropertySet} from "./IfcPropertySet"
import {IfcPropertyDependencyRelationship} from "./IfcPropertyDependencyRelationship"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship"
import {IfcProperty} from "./IfcProperty"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccomplexproperty.htm
export class IfcComplexProperty extends IfcProperty {
	UsageName : IfcIdentifier
	HasProperties : Array<IfcProperty>

    constructor(name : IfcIdentifier, usageName : IfcIdentifier, hasProperties : Array<IfcProperty>) {
        super(name)

		this.UsageName = usageName
		this.HasProperties = hasProperties

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.UsageName != null ? this.toStepValue(this.UsageName) : "$");
		parameters.push(this.HasProperties != null ? this.toStepValue(this.HasProperties) : "$");

        return parameters.join();
    }
}