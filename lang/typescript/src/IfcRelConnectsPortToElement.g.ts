
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcPort} from "./IfcPort.g"
import {IfcDistributionElement} from "./IfcDistributionElement.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsporttoelement.htm
 */
export class IfcRelConnectsPortToElement extends IfcRelConnects {
	RelatingPort : IfcPort
	RelatedElement : IfcDistributionElement

    constructor(globalId : IfcGloballyUniqueId, relatingPort : IfcPort, relatedElement : IfcDistributionElement) {
        super(globalId)

		this.RelatingPort = relatingPort
		this.RelatedElement = relatedElement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingPort))
		parameters.push(BaseIfc.toStepValue(this.RelatedElement))

        return parameters.join();
    }
}