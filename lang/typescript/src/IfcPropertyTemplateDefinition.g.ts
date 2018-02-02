
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertytemplatedefinition.htm
 */
export abstract class IfcPropertyTemplateDefinition extends IfcPropertyDefinition {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}