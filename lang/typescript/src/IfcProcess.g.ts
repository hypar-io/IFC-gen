
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
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcRelSequence} from "./IfcRelSequence.g"
import {IfcRelAssignsToProcess} from "./IfcRelAssignsToProcess.g"
import {IfcObject} from "./IfcObject.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprocess.htm
 */
export abstract class IfcProcess extends IfcObject {
	Identification : IfcIdentifier // optional
	LongDescription : IfcText // optional
	IsPredecessorTo : Array<IfcRelSequence> // inverse
	IsSuccessorFrom : Array<IfcRelSequence> // inverse
	OperatesOn : Array<IfcRelAssignsToProcess> // inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.IsPredecessorTo = new Array<IfcRelSequence>()
		this.IsSuccessorFrom = new Array<IfcRelSequence>()
		this.OperatesOn = new Array<IfcRelAssignsToProcess>()

    }
}