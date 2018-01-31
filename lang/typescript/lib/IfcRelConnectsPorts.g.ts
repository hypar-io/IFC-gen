
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcPort} from "./IfcPort"
import {IfcElement} from "./IfcElement"
import {IfcRelConnects} from "./IfcRelConnects"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsports.htm
export class IfcRelConnectsPorts extends IfcRelConnects {
	RelatingPort : IfcPort
	RelatedPort : IfcPort
	RealizingElement : IfcElement// optional

    constructor(globalId : IfcGloballyUniqueId, relatingPort : IfcPort, relatedPort : IfcPort) {
        super(globalId)

		this.RelatingPort = relatingPort
		this.RelatedPort = relatedPort

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingPort != null ? this.toStepValue(this.RelatingPort) : "$");
		parameters.push(this.RelatedPort != null ? this.toStepValue(this.RelatedPort) : "$");
		parameters.push(this.RealizingElement != null ? this.toStepValue(this.RealizingElement) : "$");

        return parameters.join();
    }
}