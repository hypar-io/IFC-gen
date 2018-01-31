
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcProduct} from "./IfcProduct"
import {IfcSpatialElement} from "./IfcSpatialElement"
import {IfcRelConnects} from "./IfcRelConnects"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelreferencedinspatialstructure.htm
export class IfcRelReferencedInSpatialStructure extends IfcRelConnects {
	RelatedElements : Array<IfcProduct>
	RelatingStructure : IfcSpatialElement

    constructor(globalId : IfcGloballyUniqueId, relatedElements : Array<IfcProduct>, relatingStructure : IfcSpatialElement) {
        super(globalId)

		this.RelatedElements = relatedElements
		this.RelatingStructure = relatingStructure

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedElements != null ? this.toStepValue(this.RelatedElements) : "$");
		parameters.push(this.RelatingStructure != null ? this.toStepValue(this.RelatingStructure) : "$");

        return parameters.join();
    }
}