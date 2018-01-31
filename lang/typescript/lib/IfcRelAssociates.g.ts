
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcDefinitionSelect} from "./IfcDefinitionSelect"
import {IfcRelAssociatesApproval} from "./IfcRelAssociatesApproval"
import {IfcRelAssociatesClassification} from "./IfcRelAssociatesClassification"
import {IfcRelAssociatesConstraint} from "./IfcRelAssociatesConstraint"
import {IfcRelAssociatesDocument} from "./IfcRelAssociatesDocument"
import {IfcRelAssociatesLibrary} from "./IfcRelAssociatesLibrary"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial"
import {IfcRelationship} from "./IfcRelationship"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociates.htm
export abstract class IfcRelAssociates extends IfcRelationship {
	RelatedObjects : Array<IfcDefinitionSelect>

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcDefinitionSelect>) {
        super(globalId)

		this.RelatedObjects = relatedObjects

    }
}