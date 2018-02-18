
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"
import {IfcRelNests} from "./IfcRelNests.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAggregates} from "./IfcRelAggregates.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcRoot} from "./IfcRoot.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjectdefinition.htm
 */
export abstract class IfcObjectDefinition extends IfcRoot {
	HasAssignments : Array<IfcRelAssigns> // inverse
	Nests : Array<IfcRelNests> // inverse
	IsNestedBy : Array<IfcRelNests> // inverse
	HasContext : Array<IfcRelDeclares> // inverse
	IsDecomposedBy : Array<IfcRelAggregates> // inverse
	Decomposes : Array<IfcRelAggregates> // inverse
	HasAssociations : Array<IfcRelAssociates> // inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
    }
}