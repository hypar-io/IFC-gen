
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcObjectDefinition} from "./IfcObjectDefinition"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum"
import {IfcProcessSelect} from "./IfcProcessSelect"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit"
import {IfcRelAssigns} from "./IfcRelAssigns"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoprocess.htm
export class IfcRelAssignsToProcess extends IfcRelAssigns {
	RelatingProcess : IfcProcessSelect
	QuantityInProcess : IfcMeasureWithUnit// optional

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>, relatingProcess : IfcProcessSelect) {
        super(globalId,relatedObjects)

		this.RelatingProcess = relatingProcess

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? this.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.toStepValue(this.RelatedObjectsType));
		parameters.push(this.RelatingProcess != null ? this.toStepValue(this.RelatingProcess) : "$");
		parameters.push(this.QuantityInProcess != null ? this.toStepValue(this.QuantityInProcess) : "$");

        return parameters.join();
    }
}