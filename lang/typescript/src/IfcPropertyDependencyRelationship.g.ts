
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcProperty} from "./IfcProperty.g"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertydependencyrelationship.htm
 */
export class IfcPropertyDependencyRelationship extends IfcResourceLevelRelationship {
	DependingProperty : IfcProperty
	DependantProperty : IfcProperty
	Expression : IfcText // optional

    constructor(dependingProperty : IfcProperty, dependantProperty : IfcProperty) {
        super()

		this.DependingProperty = dependingProperty
		this.DependantProperty = dependantProperty

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.DependingProperty != null ? BaseIfc.toStepValue(this.DependingProperty) : "$");
		parameters.push(this.DependantProperty != null ? BaseIfc.toStepValue(this.DependantProperty) : "$");
		parameters.push(this.Expression != null ? BaseIfc.toStepValue(this.Expression) : "$");

        return parameters.join();
    }
}