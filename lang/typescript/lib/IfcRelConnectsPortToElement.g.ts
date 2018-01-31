
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcPort} from "./IfcPort"
import {IfcDistributionElement} from "./IfcDistributionElement"
import {IfcRelConnects} from "./IfcRelConnects"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsporttoelement.htm
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
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingPort != null ? this.toStepValue(this.RelatingPort) : "$");
		parameters.push(this.RelatedElement != null ? this.toStepValue(this.RelatedElement) : "$");

        return parameters.join();
    }
}