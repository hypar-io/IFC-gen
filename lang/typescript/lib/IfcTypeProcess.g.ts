
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
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType"
import {IfcRelAssignsToProcess} from "./IfcRelAssignsToProcess"
import {IfcEventType} from "./IfcEventType"
import {IfcProcedureType} from "./IfcProcedureType"
import {IfcTaskType} from "./IfcTaskType"
import {IfcTypeObject} from "./IfcTypeObject"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctypeprocess.htm
export abstract class IfcTypeProcess extends IfcTypeObject {
	Identification : IfcIdentifier// optional
	LongDescription : IfcText// optional
	ProcessType : IfcLabel// optional
	OperatesOn : Array<IfcRelAssignsToProcess>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.OperatesOn = new Array<IfcRelAssignsToProcess>()

    }
}