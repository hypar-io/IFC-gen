
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcDefinitionSelect} from "./IfcDefinitionSelect.g"
import {IfcRelAssociatesApproval} from "./IfcRelAssociatesApproval.g"
import {IfcRelAssociatesClassification} from "./IfcRelAssociatesClassification.g"
import {IfcRelAssociatesConstraint} from "./IfcRelAssociatesConstraint.g"
import {IfcRelAssociatesDocument} from "./IfcRelAssociatesDocument.g"
import {IfcRelAssociatesLibrary} from "./IfcRelAssociatesLibrary.g"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"
import {IfcRelationship} from "./IfcRelationship.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociates.htm
export abstract class IfcRelAssociates extends IfcRelationship {
	RelatedObjects : Array<IfcDefinitionSelect>

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcDefinitionSelect>) {
        super(globalId)

		this.RelatedObjects = relatedObjects

    }
}