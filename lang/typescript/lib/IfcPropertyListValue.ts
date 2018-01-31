
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