
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
import {IfcCurveInterpolationEnum} from "./IfcCurveInterpolationEnum"
import {IfcSimpleProperty} from "./IfcSimpleProperty"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertytablevalue.htm
export class IfcPropertyTableValue extends IfcSimpleProperty {
	DefiningValues : Array<IfcValue>// optional
	DefinedValues : Array<IfcValue>// optional
	Expression : IfcText// optional
	DefiningUnit : IfcUnit// optional
	DefinedUnit : IfcUnit// optional
	CurveInterpolation : IfcCurveInterpolationEnum// optional

    constructor(name : IfcIdentifier) {
        super(name)
		this.DefiningValues = new Array<IfcValue>()
		this.DefinedValues = new Array<IfcValue>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.DefiningValues != null ? this.toStepValue(this.DefiningValues) : "$");
		parameters.push(this.DefinedValues != null ? this.toStepValue(this.DefinedValues) : "$");
		parameters.push(this.Expression != null ? this.toStepValue(this.Expression) : "$");
		parameters.push(this.DefiningUnit != null ? this.toStepValue(this.DefiningUnit) : "$");
		parameters.push(this.DefinedUnit != null ? this.toStepValue(this.DefinedUnit) : "$");
		parameters.push(this.toStepValue(this.CurveInterpolation));

        return parameters.join();
    }
}