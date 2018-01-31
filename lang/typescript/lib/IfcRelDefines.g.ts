
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType"
import {IfcRelationship} from "./IfcRelationship"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefines.htm
export abstract class IfcRelDefines extends IfcRelationship {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}