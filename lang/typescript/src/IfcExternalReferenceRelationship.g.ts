
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcExternalReference} from "./IfcExternalReference.g"
import {IfcResourceObjectSelect} from "./IfcResourceObjectSelect.g"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternalreferencerelationship.htm
export class IfcExternalReferenceRelationship extends IfcResourceLevelRelationship {
	RelatingReference : IfcExternalReference
	RelatedResourceObjects : Array<IfcResourceObjectSelect>

    constructor(relatingReference : IfcExternalReference, relatedResourceObjects : Array<IfcResourceObjectSelect>) {
        super()

		this.RelatingReference = relatingReference
		this.RelatedResourceObjects = relatedResourceObjects

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingReference != null ? this.toStepValue(this.RelatingReference) : "$");
		parameters.push(this.RelatedResourceObjects != null ? this.toStepValue(this.RelatedResourceObjects) : "$");

        return parameters.join();
    }
}