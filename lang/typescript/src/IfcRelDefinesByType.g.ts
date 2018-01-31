
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObject} from "./IfcObject.g"
import {IfcTypeObject} from "./IfcTypeObject.g"
import {IfcRelDefines} from "./IfcRelDefines.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbytype.htm
export class IfcRelDefinesByType extends IfcRelDefines {
	RelatedObjects : Array<IfcObject>
	RelatingType : IfcTypeObject

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObject>, relatingType : IfcTypeObject) {
        super(globalId)

		this.RelatedObjects = relatedObjects
		this.RelatingType = relatingType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? this.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.RelatingType != null ? this.toStepValue(this.RelatingType) : "$");

        return parameters.join();
    }
}