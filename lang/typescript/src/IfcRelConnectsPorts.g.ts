
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
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingPort != null ? BaseIfc.toStepValue(this.RelatingPort) : "$");
		parameters.push(this.RelatedPort != null ? BaseIfc.toStepValue(this.RelatedPort) : "$");
		parameters.push(this.RealizingElement != null ? BaseIfc.toStepValue(this.RealizingElement) : "$");

        return parameters.join();
    }
}