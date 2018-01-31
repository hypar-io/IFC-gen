
import {BaseIfc} from "./BaseIfc"
import {IfcURIReference} from "./IfcURIReference.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcClassificationReferenceSelect} from "./IfcClassificationReferenceSelect.g"
import {IfcText} from "./IfcText.g"
import {IfcRelAssociatesClassification} from "./IfcRelAssociatesClassification.g"
import {IfcExternalReference} from "./IfcExternalReference.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassificationreference.htm
export class IfcClassificationReference extends IfcExternalReference {
	ReferencedSource : IfcClassificationReferenceSelect// optional
	Description : IfcText// optional
	Sort : IfcIdentifier// optional
	ClassificationRefForObjects : Array<IfcRelAssociatesClassification>// inverse
	HasReferences : Array<IfcClassificationReference>// inverse

    constructor() {
        super()
		this.ClassificationRefForObjects = new Array<IfcRelAssociatesClassification>()
		this.HasReferences = new Array<IfcClassificationReference>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Location != null ? this.toStepValue(this.Location) : "$");
		parameters.push(this.Identification != null ? this.toStepValue(this.Identification) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.ReferencedSource != null ? this.toStepValue(this.ReferencedSource) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Sort != null ? this.toStepValue(this.Sort) : "$");

        return parameters.join();
    }
}