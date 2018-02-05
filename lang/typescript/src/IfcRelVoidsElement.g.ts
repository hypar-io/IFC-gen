
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcElement} from "./IfcElement.g"
import {IfcFeatureElementSubtraction} from "./IfcFeatureElementSubtraction.g"
import {IfcRelDecomposes} from "./IfcRelDecomposes.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelvoidselement.htm
 */
export class IfcRelVoidsElement extends IfcRelDecomposes {
	RelatingBuildingElement : IfcElement
	RelatedOpeningElement : IfcFeatureElementSubtraction

    constructor(globalId : IfcGloballyUniqueId, relatingBuildingElement : IfcElement, relatedOpeningElement : IfcFeatureElementSubtraction) {
        super(globalId)

		this.RelatingBuildingElement = relatingBuildingElement
		this.RelatedOpeningElement = relatedOpeningElement

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingBuildingElement))
		parameters.push(BaseIfc.toStepValue(this.RelatedOpeningElement))

            return parameters.join();
        }
}