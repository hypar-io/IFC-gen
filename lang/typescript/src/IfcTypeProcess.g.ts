
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
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRelAssignsToProcess} from "./IfcRelAssignsToProcess.g"
import {IfcTypeObject} from "./IfcTypeObject.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctypeprocess.htm
 */
export abstract class IfcTypeProcess extends IfcTypeObject {
	Identification : IfcIdentifier // optional
	LongDescription : IfcText // optional
	ProcessType : IfcLabel // optional
	OperatesOn : Array<IfcRelAssignsToProcess> // inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.OperatesOn = new Array<IfcRelAssignsToProcess>()

    }
}