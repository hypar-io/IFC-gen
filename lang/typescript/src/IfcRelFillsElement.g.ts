
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcOpeningElement} from "./IfcOpeningElement.g"
import {IfcElement} from "./IfcElement.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelfillselement.htm
 */
export class IfcRelFillsElement extends IfcRelConnects {
	RelatingOpeningElement : IfcOpeningElement
	RelatedBuildingElement : IfcElement

    constructor(globalId : IfcGloballyUniqueId, relatingOpeningElement : IfcOpeningElement, relatedBuildingElement : IfcElement) {
        super(globalId)

		this.RelatingOpeningElement = relatingOpeningElement
		this.RelatedBuildingElement = relatedBuildingElement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingOpeningElement))
		parameters.push(BaseIfc.toStepValue(this.RelatedBuildingElement))

        return parameters.join();
    }
}