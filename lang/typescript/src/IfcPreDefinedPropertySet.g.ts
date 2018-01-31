
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
import {IfcDoorLiningProperties} from "./IfcDoorLiningProperties.g"
import {IfcDoorPanelProperties} from "./IfcDoorPanelProperties.g"
import {IfcPermeableCoveringProperties} from "./IfcPermeableCoveringProperties.g"
import {IfcReinforcementDefinitionProperties} from "./IfcReinforcementDefinitionProperties.g"
import {IfcWindowLiningProperties} from "./IfcWindowLiningProperties.g"
import {IfcWindowPanelProperties} from "./IfcWindowPanelProperties.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedpropertyset.htm
export abstract class IfcPreDefinedPropertySet extends IfcPropertySetDefinition {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}