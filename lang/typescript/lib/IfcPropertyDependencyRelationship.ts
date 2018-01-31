
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcProperty} from "./IfcProperty"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertydependencyrelationship.htm
export class IfcPropertyDependencyRelationship extends IfcResourceLevelRelationship {
	DependingProperty : IfcProperty
	DependantProperty : IfcProperty
	Expression : IfcText// optional

    constructor(dependingProperty : IfcProperty, dependantProperty : IfcProperty) {
        super()

		this.DependingProperty = dependingProperty
		this.DependantProperty = dependantProperty

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.DependingProperty != null ? this.toStepValue(this.DependingProperty) : "$");
		parameters.push(this.DependantProperty != null ? this.toStepValue(this.DependantProperty) : "$");
		parameters.push(this.Expression != null ? this.toStepValue(this.Expression) : "$");

        return parameters.join();
    }
}