
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry"
import {IfcElement} from "./IfcElement"
import {IfcInteger} from "./IfcInteger"
import {IfcConnectionTypeEnum} from "./IfcConnectionTypeEnum"
import {IfcRelConnectsElements} from "./IfcRelConnectsElements"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectspathelements.htm
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
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ConnectionGeometry != null ? this.toStepValue(this.ConnectionGeometry) : "$");
		parameters.push(this.RelatingElement != null ? this.toStepValue(this.RelatingElement) : "$");
		parameters.push(this.RelatedElement != null ? this.toStepValue(this.RelatedElement) : "$");
		parameters.push(this.RelatingPriorities != null ? this.toStepValue(this.RelatingPriorities) : "$");
		parameters.push(this.RelatedPriorities != null ? this.toStepValue(this.RelatedPriorities) : "$");
		parameters.push(this.toStepValue(this.RelatedConnectionType));
		parameters.push(this.toStepValue(this.RelatingConnectionType));

        return parameters.join();
    }
}