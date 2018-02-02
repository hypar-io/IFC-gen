
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.g"
import {IfcElement} from "./IfcElement.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectselements.htm
 */
export class IfcRelConnectsElements extends IfcRelConnects {
	ConnectionGeometry : IfcConnectionGeometry // optional
	RelatingElement : IfcElement
	RelatedElement : IfcElement

    constructor(globalId : IfcGloballyUniqueId, relatingElement : IfcElement, relatedElement : IfcElement) {
        super(globalId)

		this.RelatingElement = relatingElement
		this.RelatedElement = relatedElement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.ConnectionGeometry != null ? BaseIfc.toStepValue(this.ConnectionGeometry) : "$");
		parameters.push(this.RelatingElement != null ? BaseIfc.toStepValue(this.RelatingElement) : "$");
		parameters.push(this.RelatedElement != null ? BaseIfc.toStepValue(this.RelatedElement) : "$");

        return parameters.join();
    }
}