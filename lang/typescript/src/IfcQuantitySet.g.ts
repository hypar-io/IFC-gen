
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcTypeObject} from "./IfcTypeObject.g"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityset.htm
 */
export abstract class IfcQuantitySet extends IfcPropertySetDefinition {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}