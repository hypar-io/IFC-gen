
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcSpace} from "./IfcSpace.g"
import {IfcCovering} from "./IfcCovering.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelcoversspaces.htm
 */
export class IfcRelCoversSpaces extends IfcRelConnects {
	RelatingSpace : IfcSpace
	RelatedCoverings : Array<IfcCovering>

    constructor(globalId : IfcGloballyUniqueId, relatingSpace : IfcSpace, relatedCoverings : Array<IfcCovering>) {
        super(globalId)

		this.RelatingSpace = relatingSpace
		this.RelatedCoverings = relatedCoverings

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingSpace != null ? BaseIfc.toStepValue(this.RelatingSpace) : "$");
		parameters.push(this.RelatedCoverings != null ? BaseIfc.toStepValue(this.RelatedCoverings) : "$");

        return parameters.join();
    }
}