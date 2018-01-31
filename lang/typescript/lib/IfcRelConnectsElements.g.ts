
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.g"
import {IfcElement} from "./IfcElement.g"
import {IfcRelConnectsPathElements} from "./IfcRelConnectsPathElements.g"
import {IfcRelConnectsWithRealizingElements} from "./IfcRelConnectsWithRealizingElements.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectselements.htm
export class IfcRelConnectsElements extends IfcRelConnects {
	ConnectionGeometry : IfcConnectionGeometry// optional
	RelatingElement : IfcElement
	RelatedElement : IfcElement

    constructor(globalId : IfcGloballyUniqueId, relatingElement : IfcElement, relatedElement : IfcElement) {
        super(globalId)

		this.RelatingElement = relatingElement
		this.RelatedElement = relatedElement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ConnectionGeometry != null ? this.toStepValue(this.ConnectionGeometry) : "$");
		parameters.push(this.RelatingElement != null ? this.toStepValue(this.RelatingElement) : "$");
		parameters.push(this.RelatedElement != null ? this.toStepValue(this.RelatedElement) : "$");

        return parameters.join();
    }
}