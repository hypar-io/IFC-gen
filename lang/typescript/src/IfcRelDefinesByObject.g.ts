
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObject} from "./IfcObject.g"
import {IfcRelDefines} from "./IfcRelDefines.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbyobject.htm
 */
export class IfcRelDefinesByObject extends IfcRelDefines {
	RelatedObjects : Array<IfcObject>
	RelatingObject : IfcObject

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObject>, relatingObject : IfcObject) {
        super(globalId)

		this.RelatedObjects = relatedObjects
		this.RelatingObject = relatingObject

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? BaseIfc.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.RelatingObject != null ? BaseIfc.toStepValue(this.RelatingObject) : "$");

        return parameters.join();
    }
}