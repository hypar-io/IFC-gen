
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRoot} from "./IfcRoot.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelationship.htm
 */
export abstract class IfcRelationship extends IfcRoot {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}