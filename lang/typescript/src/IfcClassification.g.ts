
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcDate} from "./IfcDate.g"
import {IfcText} from "./IfcText.g"
import {IfcURIReference} from "./IfcURIReference.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcRelAssociatesClassification} from "./IfcRelAssociatesClassification.g"
import {IfcClassificationReference} from "./IfcClassificationReference.g"
import {IfcExternalInformation} from "./IfcExternalInformation.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassification.htm
 */
export class IfcClassification extends IfcExternalInformation {
	Source : IfcLabel // optional
	Edition : IfcLabel // optional
	EditionDate : IfcDate // optional
	Name : IfcLabel
	Description : IfcText // optional
	Location : IfcURIReference // optional
	ReferenceTokens : Array<IfcIdentifier> // optional
	ClassificationForObjects : Array<IfcRelAssociatesClassification> // inverse
	HasReferences : Array<IfcClassificationReference> // inverse

    constructor(name : IfcLabel) {
        super()
		this.Name = name

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Source))
		parameters.push(BaseIfc.toStepValue(this.Edition))
		parameters.push(BaseIfc.toStepValue(this.EditionDate))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Location))
		parameters.push(BaseIfc.toStepValue(this.ReferenceTokens))

        return parameters.join();
    }
}