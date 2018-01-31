
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

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertylistvalue.htm
export class IfcPropertyListValue extends IfcSimpleProperty {
	ListValues : Array<IfcValue>// optional
	Unit : IfcUnit// optional

    constructor(name : IfcIdentifier) {
        super(name)
		this.ListValues = new Array<IfcValue>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ListValues != null ? this.toStepValue(this.ListValues) : "$");
		parameters.push(this.Unit != null ? this.toStepValue(this.Unit) : "$");

        return parameters.join();
    }
}