
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelAggregates} from "./IfcRelAggregates"
import {IfcRelNests} from "./IfcRelNests"
import {IfcRelProjectsElement} from "./IfcRelProjectsElement"
import {IfcRelVoidsElement} from "./IfcRelVoidsElement"
import {IfcRelationship} from "./IfcRelationship"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldecomposes.htm
export abstract class IfcRelDecomposes extends IfcRelationship {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}