
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum.g"
import {IfcProcess} from "./IfcProcess.g"
import {IfcTypeProcess} from "./IfcTypeProcess.g"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoprocess.htm
 */
export class IfcRelAssignsToProcess extends IfcRelAssigns {
	RelatingProcess : IfcProcess|IfcTypeProcess
	QuantityInProcess : IfcMeasureWithUnit // optional

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>, relatingProcess : IfcProcess|IfcTypeProcess) {
        super(globalId,relatedObjects)

		this.RelatingProcess = relatingProcess

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? BaseIfc.toStepValue(this.RelatedObjects) : "$");
		parameters.push(BaseIfc.toStepValue(this.RelatedObjectsType));
		parameters.push(this.RelatingProcess != null ? BaseIfc.toStepValue(this.RelatingProcess) : "$");
		parameters.push(this.QuantityInProcess != null ? BaseIfc.toStepValue(this.QuantityInProcess) : "$");

        return parameters.join();
    }
}