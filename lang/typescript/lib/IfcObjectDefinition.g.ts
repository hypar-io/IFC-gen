
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelAssigns} from "./IfcRelAssigns"
import {IfcRelNests} from "./IfcRelNests"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAggregates} from "./IfcRelAggregates"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcContext} from "./IfcContext"
import {IfcObject} from "./IfcObject"
import {IfcTypeObject} from "./IfcTypeObject"
import {IfcRoot} from "./IfcRoot"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjectdefinition.htm
export abstract class IfcObjectDefinition extends IfcRoot {
	HasAssignments : Array<IfcRelAssigns>// inverse
	Nests : Array<IfcRelNests>// inverse
	IsNestedBy : Array<IfcRelNests>// inverse
	HasContext : Array<IfcRelDeclares>// inverse
	IsDecomposedBy : Array<IfcRelAggregates>// inverse
	Decomposes : Array<IfcRelAggregates>// inverse
	HasAssociations : Array<IfcRelAssociates>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.HasAssignments = new Array<IfcRelAssigns>()
		this.Nests = new Array<IfcRelNests>()
		this.IsNestedBy = new Array<IfcRelNests>()
		this.HasContext = new Array<IfcRelDeclares>()
		this.IsDecomposedBy = new Array<IfcRelAggregates>()
		this.Decomposes = new Array<IfcRelAggregates>()
		this.HasAssociations = new Array<IfcRelAssociates>()

    }
}