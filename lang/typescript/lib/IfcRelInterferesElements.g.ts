
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcElement} from "./IfcElement"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcRelConnects} from "./IfcRelConnects"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelinterfereselements.htm
export class IfcRelInterferesElements extends IfcRelConnects {
	RelatingElement : IfcElement
	RelatedElement : IfcElement
	InterferenceGeometry : IfcConnectionGeometry// optional
	InterferenceType : IfcIdentifier// optional
	ImpliedOrder : boolean

    constructor(globalId : IfcGloballyUniqueId, relatingElement : IfcElement, relatedElement : IfcElement, impliedOrder : boolean) {
        super(globalId)

		this.RelatingElement = relatingElement
		this.RelatedElement = relatedElement
		this.ImpliedOrder = impliedOrder

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingElement != null ? this.toStepValue(this.RelatingElement) : "$");
		parameters.push(this.RelatedElement != null ? this.toStepValue(this.RelatedElement) : "$");
		parameters.push(this.InterferenceGeometry != null ? this.toStepValue(this.InterferenceGeometry) : "$");
		parameters.push(this.InterferenceType != null ? this.toStepValue(this.InterferenceType) : "$");
		parameters.push(this.ImpliedOrder != null ? this.toStepValue(this.ImpliedOrder) : "$");

        return parameters.join();
    }
}