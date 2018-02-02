
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
		this.PartOfPset = new Array<IfcPropertySet>()
		this.PropertyForDependance = new Array<IfcPropertyDependencyRelationship>()
		this.PropertyDependsOn = new Array<IfcPropertyDependencyRelationship>()
		this.PartOfComplex = new Array<IfcComplexProperty>()
		this.HasConstraints = new Array<IfcResourceConstraintRelationship>()
		this.HasApprovals = new Array<IfcResourceApprovalRelationship>()

		this.Name = name

    }
}