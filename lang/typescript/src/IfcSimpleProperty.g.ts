
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcText} from "./IfcText.g"
import {IfcPropertySet} from "./IfcPropertySet.g"
import {IfcPropertyDependencyRelationship} from "./IfcPropertyDependencyRelationship.g"
import {IfcComplexProperty} from "./IfcComplexProperty.g"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship.g"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship.g"
import {IfcProperty} from "./IfcProperty.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsimpleproperty.htm
 */
export abstract class IfcSimpleProperty extends IfcProperty {

    constructor(name : IfcIdentifier) {
        super(name)
    }
}