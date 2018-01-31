
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcElement} from "./IfcElement.g"
import {IfcCovering} from "./IfcCovering.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelcoversbldgelements.htm
export class IfcRelCoversBldgElements extends IfcRelConnects {
	RelatingBuildingElement : IfcElement
	RelatedCoverings : Array<IfcCovering>

    constructor(globalId : IfcGloballyUniqueId, relatingBuildingElement : IfcElement, relatedCoverings : Array<IfcCovering>) {
        super(globalId)

		this.RelatingBuildingElement = relatingBuildingElement
		this.RelatedCoverings = relatedCoverings

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingBuildingElement != null ? this.toStepValue(this.RelatingBuildingElement) : "$");
		parameters.push(this.RelatedCoverings != null ? this.toStepValue(this.RelatedCoverings) : "$");

        return parameters.join();
    }
}