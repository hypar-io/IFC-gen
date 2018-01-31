
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
import {IfcPropertyEnumeration} from "./IfcPropertyEnumeration.g"
import {IfcSimpleProperty} from "./IfcSimpleProperty.g"

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