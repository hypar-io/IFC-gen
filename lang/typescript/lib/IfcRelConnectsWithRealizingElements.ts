
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry"
import {IfcElement} from "./IfcElement"
import {IfcRelConnectsElements} from "./IfcRelConnectsElements"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectswithrealizingelements.htm
export class IfcRelConnectsWithRealizingElements extends IfcRelConnectsElements {
	RealizingElements : Array<IfcElement>
	ConnectionType : IfcLabel// optional

    constructor(globalId : IfcGloballyUniqueId, relatingElement : IfcElement, relatedElement : IfcElement, realizingElements : Array<IfcElement>) {
        super(globalId,relatingElement,relatedElement)

		this.RealizingElements = realizingElements

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
		parameters.push(this.RealizingElements != null ? this.toStepValue(this.RealizingElements) : "$");
		parameters.push(this.ConnectionType != null ? this.toStepValue(this.ConnectionType) : "$");

        return parameters.join();
    }
}