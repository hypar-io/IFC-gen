
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcPort} from "./IfcPort.g"
import {IfcElement} from "./IfcElement.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsports.htm
 */
export class IfcRelConnectsPorts extends IfcRelConnects {
	RelatingPort : IfcPort
	RelatedPort : IfcPort
	RealizingElement : IfcElement // optional

    constructor(globalId : IfcGloballyUniqueId, relatingPort : IfcPort, relatedPort : IfcPort) {
        super(globalId)

		this.RelatingPort = relatingPort
		this.RelatedPort = relatedPort

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingPort))
		parameters.push(BaseIfc.toStepValue(this.RelatedPort))
		parameters.push(BaseIfc.toStepValue(this.RealizingElement))

            return parameters.join();
        }
}