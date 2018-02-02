
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.g"
import {IfcElement} from "./IfcElement.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcConnectionTypeEnum} from "./IfcConnectionTypeEnum.g"
import {IfcRelConnectsElements} from "./IfcRelConnectsElements.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectspathelements.htm
 */
export class IfcRelConnectsPathElements extends IfcRelConnectsElements {
	RelatingPriorities : Array<IfcInteger>
	RelatedPriorities : Array<IfcInteger>
	RelatedConnectionType : IfcConnectionTypeEnum
	RelatingConnectionType : IfcConnectionTypeEnum

    constructor(globalId : IfcGloballyUniqueId, relatingElement : IfcElement, relatedElement : IfcElement, relatingPriorities : Array<IfcInteger>, relatedPriorities : Array<IfcInteger>, relatedConnectionType : IfcConnectionTypeEnum, relatingConnectionType : IfcConnectionTypeEnum) {
        super(globalId,relatingElement,relatedElement)

		this.RelatingPriorities = relatingPriorities
		this.RelatedPriorities = relatedPriorities
		this.RelatedConnectionType = relatedConnectionType
		this.RelatingConnectionType = relatingConnectionType

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
		parameters.push(this.RelatingPriorities != null ? BaseIfc.toStepValue(this.RelatingPriorities) : "$");
		parameters.push(this.RelatedPriorities != null ? BaseIfc.toStepValue(this.RelatedPriorities) : "$");
		parameters.push(BaseIfc.toStepValue(this.RelatedConnectionType));
		parameters.push(BaseIfc.toStepValue(this.RelatingConnectionType));

        return parameters.join();
    }
}