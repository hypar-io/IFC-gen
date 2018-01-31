
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelConnectsElements} from "./IfcRelConnectsElements.g"
import {IfcRelConnectsPortToElement} from "./IfcRelConnectsPortToElement.g"
import {IfcRelConnectsPorts} from "./IfcRelConnectsPorts.g"
import {IfcRelConnectsStructuralActivity} from "./IfcRelConnectsStructuralActivity.g"
import {IfcRelConnectsStructuralMember} from "./IfcRelConnectsStructuralMember.g"
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure.g"
import {IfcRelCoversBldgElements} from "./IfcRelCoversBldgElements.g"
import {IfcRelCoversSpaces} from "./IfcRelCoversSpaces.g"
import {IfcRelFillsElement} from "./IfcRelFillsElement.g"
import {IfcRelFlowControlElements} from "./IfcRelFlowControlElements.g"
import {IfcRelInterferesElements} from "./IfcRelInterferesElements.g"
import {IfcRelReferencedInSpatialStructure} from "./IfcRelReferencedInSpatialStructure.g"
import {IfcRelSequence} from "./IfcRelSequence.g"
import {IfcRelServicesBuildings} from "./IfcRelServicesBuildings.g"
import {IfcRelSpaceBoundary} from "./IfcRelSpaceBoundary.g"
import {IfcRelationship} from "./IfcRelationship.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnects.htm
export abstract class IfcRelConnects extends IfcRelationship {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}