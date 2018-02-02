
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcProduct} from "./IfcProduct.g"
import {IfcSpatialElement} from "./IfcSpatialElement.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelcontainedinspatialstructure.htm
 */
export class IfcRelContainedInSpatialStructure extends IfcRelConnects {
	RelatedElements : Array<IfcProduct>
	RelatingStructure : IfcSpatialElement

    constructor(globalId : IfcGloballyUniqueId, relatedElements : Array<IfcProduct>, relatingStructure : IfcSpatialElement) {
        super(globalId)

		this.RelatedElements = relatedElements
		this.RelatingStructure = relatingStructure

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedElements != null ? BaseIfc.toStepValue(this.RelatedElements) : "$");
		parameters.push(this.RelatingStructure != null ? BaseIfc.toStepValue(this.RelatingStructure) : "$");

        return parameters.join();
    }
}