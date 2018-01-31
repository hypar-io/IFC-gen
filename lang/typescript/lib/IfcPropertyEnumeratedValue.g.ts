
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
import {IfcPropertyEnumeration} from "./IfcPropertyEnumeration"
import {IfcSimpleProperty} from "./IfcSimpleProperty"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyenumeratedvalue.htm
export class IfcPropertyEnumeratedValue extends IfcSimpleProperty {
	EnumerationValues : Array<IfcValue>// optional
	EnumerationReference : IfcPropertyEnumeration// optional

    constructor(name : IfcIdentifier) {
        super(name)
		this.EnumerationValues = new Array<IfcValue>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.EnumerationValues != null ? this.toStepValue(this.EnumerationValues) : "$");
		parameters.push(this.EnumerationReference != null ? this.toStepValue(this.EnumerationReference) : "$");

        return parameters.join();
    }
}