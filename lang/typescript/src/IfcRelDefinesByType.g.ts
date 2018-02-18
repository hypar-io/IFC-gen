
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObject} from "./IfcObject.g"
import {IfcTypeObject} from "./IfcTypeObject.g"
import {IfcRelDefines} from "./IfcRelDefines.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbytype.htm
 */
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
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))
		parameters.push(BaseIfc.toStepValue(this.RelatingType))

        return parameters.join();
    }
}