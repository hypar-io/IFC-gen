
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcTypeObject} from "./IfcTypeObject"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties"
import {IfcDoorLiningProperties} from "./IfcDoorLiningProperties"
import {IfcDoorPanelProperties} from "./IfcDoorPanelProperties"
import {IfcPermeableCoveringProperties} from "./IfcPermeableCoveringProperties"
import {IfcReinforcementDefinitionProperties} from "./IfcReinforcementDefinitionProperties"
import {IfcWindowLiningProperties} from "./IfcWindowLiningProperties"
import {IfcWindowPanelProperties} from "./IfcWindowPanelProperties"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedpropertyset.htm
export abstract class IfcPreDefinedPropertySet extends IfcPropertySetDefinition {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}