
import {BaseIfc} from "./BaseIfc"
import {IfcURIReference} from "./IfcURIReference.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcClassification} from "./IfcClassification.g"
import {IfcText} from "./IfcText.g"
import {IfcRelAssociatesClassification} from "./IfcRelAssociatesClassification.g"
import {IfcExternalReference} from "./IfcExternalReference.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassificationreference.htm
 */
export class IfcClassificationReference extends IfcExternalReference {
	ReferencedSource : IfcClassification|IfcClassificationReference // optional
	Description : IfcText // optional
	Sort : IfcIdentifier // optional
	ClassificationRefForObjects : Array<IfcRelAssociatesClassification> // inverse
	HasReferences : Array<IfcClassificationReference> // inverse

    constructor() {
        super()
		this.ClassificationRefForObjects = new Array<IfcRelAssociatesClassification>()
		this.HasReferences = new Array<IfcClassificationReference>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Location != null ? BaseIfc.toStepValue(this.Location) : "$");
		parameters.push(this.Identification != null ? BaseIfc.toStepValue(this.Identification) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.ReferencedSource != null ? BaseIfc.toStepValue(this.ReferencedSource) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.Sort != null ? BaseIfc.toStepValue(this.Sort) : "$");

        return parameters.join();
    }
}