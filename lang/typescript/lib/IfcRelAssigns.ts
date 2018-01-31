
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcObjectDefinition} from "./IfcObjectDefinition"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum"
import {IfcRelAssignsToActor} from "./IfcRelAssignsToActor"
import {IfcRelAssignsToControl} from "./IfcRelAssignsToControl"
import {IfcRelAssignsToGroup} from "./IfcRelAssignsToGroup"
import {IfcRelAssignsToProcess} from "./IfcRelAssignsToProcess"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct"
import {IfcRelAssignsToResource} from "./IfcRelAssignsToResource"
import {IfcRelationship} from "./IfcRelationship"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassigns.htm
export abstract class IfcRelAssigns extends IfcRelationship {
	RelatedObjects : Array<IfcObjectDefinition>
	RelatedObjectsType : IfcObjectTypeEnum// optional

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>) {
        super(globalId)

		this.RelatedObjects = relatedObjects

    }
}