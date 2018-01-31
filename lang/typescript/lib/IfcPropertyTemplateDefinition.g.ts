
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcPropertySetTemplate} from "./IfcPropertySetTemplate"
import {IfcPropertyTemplate} from "./IfcPropertyTemplate"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertytemplatedefinition.htm
export abstract class IfcPropertyTemplateDefinition extends IfcPropertyDefinition {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}