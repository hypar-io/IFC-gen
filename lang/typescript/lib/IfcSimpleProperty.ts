
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcText} from "./IfcText"
import {IfcPropertySet} from "./IfcPropertySet"
import {IfcPropertyDependencyRelationship} from "./IfcPropertyDependencyRelationship"
import {IfcComplexProperty} from "./IfcComplexProperty"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship"
import {IfcPropertyBoundedValue} from "./IfcPropertyBoundedValue"
import {IfcPropertyEnumeratedValue} from "./IfcPropertyEnumeratedValue"
import {IfcPropertyListValue} from "./IfcPropertyListValue"
import {IfcPropertyReferenceValue} from "./IfcPropertyReferenceValue"
import {IfcPropertySingleValue} from "./IfcPropertySingleValue"
import {IfcPropertyTableValue} from "./IfcPropertyTableValue"
import {IfcProperty} from "./IfcProperty"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsimpleproperty.htm
export abstract class IfcSimpleProperty extends IfcProperty {

    constructor(name : IfcIdentifier) {
        super(name)

    }
}