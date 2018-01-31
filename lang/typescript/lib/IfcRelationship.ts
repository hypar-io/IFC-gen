
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelAssigns} from "./IfcRelAssigns"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcRelConnects} from "./IfcRelConnects"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelDecomposes} from "./IfcRelDecomposes"
import {IfcRelDefines} from "./IfcRelDefines"
import {IfcRoot} from "./IfcRoot"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelationship.htm
export abstract class IfcRelationship extends IfcRoot {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}