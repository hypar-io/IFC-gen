
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
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Location))
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.ReferencedSource))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Sort))

        return parameters.join();
    }
}