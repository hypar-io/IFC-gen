
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
import {IfcElementQuantity} from "./IfcElementQuantity"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityset.htm
export abstract class IfcQuantitySet extends IfcPropertySetDefinition {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}