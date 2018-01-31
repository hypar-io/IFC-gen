
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRelationship} from "./IfcRelationship.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefines.htm
export abstract class IfcRelDefines extends IfcRelationship {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}