
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcDate} from "./IfcDate"
import {IfcText} from "./IfcText"
import {IfcURIReference} from "./IfcURIReference"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcRelAssociatesClassification} from "./IfcRelAssociatesClassification"
import {IfcClassificationReference} from "./IfcClassificationReference"
import {IfcExternalInformation} from "./IfcExternalInformation"

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