
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcText} from "./IfcText"
import {IfcPropertySet} from "./IfcPropertySet"
import {IfcPropertyDependencyRelationship} from "./IfcPropertyDependencyRelationship"
import {IfcComplexProperty} from "./IfcComplexProperty"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship"
import {IfcSimpleProperty} from "./IfcSimpleProperty"
import {IfcPropertyAbstraction} from "./IfcPropertyAbstraction"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproperty.htm
export abstract class IfcProperty extends IfcPropertyAbstraction {
	Name : IfcIdentifier
	Description : IfcText// optional
	PartOfPset : Array<IfcPropertySet>// inverse
	PropertyForDependance : Array<IfcPropertyDependencyRelationship>// inverse
	PropertyDependsOn : Array<IfcPropertyDependencyRelationship>// inverse
	PartOfComplex : Array<IfcComplexProperty>// inverse
	HasConstraints : Array<IfcResourceConstraintRelationship>// inverse
	HasApprovals : Array<IfcResourceApprovalRelationship>// inverse

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