
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcText} from "./IfcText.g"
import {IfcPropertySet} from "./IfcPropertySet.g"
import {IfcPropertyDependencyRelationship} from "./IfcPropertyDependencyRelationship.g"
import {IfcComplexProperty} from "./IfcComplexProperty.g"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship.g"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship.g"
import {IfcPropertyAbstraction} from "./IfcPropertyAbstraction.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproperty.htm
 */
export abstract class IfcProperty extends IfcPropertyAbstraction {
	Name : IfcIdentifier
	Description : IfcText // optional
	PartOfPset : Array<IfcPropertySet> // inverse
	PropertyForDependance : Array<IfcPropertyDependencyRelationship> // inverse
	PropertyDependsOn : Array<IfcPropertyDependencyRelationship> // inverse
	PartOfComplex : Array<IfcComplexProperty> // inverse
	HasConstraints : Array<IfcResourceConstraintRelationship> // inverse
	HasApprovals : Array<IfcResourceApprovalRelationship> // inverse

    constructor(name : IfcIdentifier) {
        super()
		this.Name = name

    }
}