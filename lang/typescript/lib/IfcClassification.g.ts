
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcDate} from "./IfcDate.g"
import {IfcText} from "./IfcText.g"
import {IfcURIReference} from "./IfcURIReference.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcRelAssociatesClassification} from "./IfcRelAssociatesClassification.g"
import {IfcClassificationReference} from "./IfcClassificationReference.g"
import {IfcExternalInformation} from "./IfcExternalInformation.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassification.htm
export class IfcClassification extends IfcExternalInformation {
	Source : IfcLabel// optional
	Edition : IfcLabel// optional
	EditionDate : IfcDate// optional
	Name : IfcLabel
	Description : IfcText// optional
	Location : IfcURIReference// optional
	ReferenceTokens : Array<IfcIdentifier>// optional
	ClassificationForObjects : Array<IfcRelAssociatesClassification>// inverse
	HasReferences : Array<IfcClassificationReference>// inverse

    constructor(name : IfcLabel) {
        super()
		this.ReferenceTokens = new Array<IfcIdentifier>()
		this.ClassificationForObjects = new Array<IfcRelAssociatesClassification>()
		this.HasReferences = new Array<IfcClassificationReference>()

		this.Name = name

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Source != null ? this.toStepValue(this.Source) : "$");
		parameters.push(this.Edition != null ? this.toStepValue(this.Edition) : "$");
		parameters.push(this.EditionDate != null ? this.toStepValue(this.EditionDate) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Location != null ? this.toStepValue(this.Location) : "$");
		parameters.push(this.ReferenceTokens != null ? this.toStepValue(this.ReferenceTokens) : "$");

        return parameters.join();
    }
}