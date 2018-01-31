
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
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcRelSequence} from "./IfcRelSequence"
import {IfcRelAssignsToProcess} from "./IfcRelAssignsToProcess"
import {IfcEvent} from "./IfcEvent"
import {IfcProcedure} from "./IfcProcedure"
import {IfcTask} from "./IfcTask"
import {IfcObject} from "./IfcObject"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprocess.htm
export abstract class IfcProcess extends IfcObject {
	Identification : IfcIdentifier// optional
	LongDescription : IfcText// optional
	IsPredecessorTo : Array<IfcRelSequence>// inverse
	IsSuccessorFrom : Array<IfcRelSequence>// inverse
	OperatesOn : Array<IfcRelAssignsToProcess>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.IsPredecessorTo = new Array<IfcRelSequence>()
		this.IsSuccessorFrom = new Array<IfcRelSequence>()
		this.OperatesOn = new Array<IfcRelAssignsToProcess>()

    }
}