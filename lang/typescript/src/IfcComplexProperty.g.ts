
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcText} from "./IfcText.g"
import {IfcPropertySet} from "./IfcPropertySet.g"
import {IfcPropertyDependencyRelationship} from "./IfcPropertyDependencyRelationship.g"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship.g"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship.g"
import {IfcProperty} from "./IfcProperty.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccomplexproperty.htm
 */
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
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.UsageName != null ? BaseIfc.toStepValue(this.UsageName) : "$");
		parameters.push(this.HasProperties != null ? BaseIfc.toStepValue(this.HasProperties) : "$");

        return parameters.join();
    }
}