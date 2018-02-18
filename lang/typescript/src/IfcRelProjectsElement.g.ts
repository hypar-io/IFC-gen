
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcElement} from "./IfcElement.g"
import {IfcFeatureElementAddition} from "./IfcFeatureElementAddition.g"
import {IfcRelDecomposes} from "./IfcRelDecomposes.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelprojectselement.htm
 */
export class IfcRelProjectsElement extends IfcRelDecomposes {
	RelatingElement : IfcElement
	RelatedFeatureElement : IfcFeatureElementAddition

    constructor(globalId : IfcGloballyUniqueId, relatingElement : IfcElement, relatedFeatureElement : IfcFeatureElementAddition) {
        super(globalId)

		this.RelatingElement = relatingElement
		this.RelatedFeatureElement = relatedFeatureElement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingElement))
		parameters.push(BaseIfc.toStepValue(this.RelatedFeatureElement))

        return parameters.join();
    }
}