
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcRelConnects} from "./IfcRelConnects.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelDecomposes} from "./IfcRelDecomposes.g"
import {IfcRelDefines} from "./IfcRelDefines.g"
import {IfcRoot} from "./IfcRoot.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelationship.htm
export abstract class IfcRelationship extends IfcRoot {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}