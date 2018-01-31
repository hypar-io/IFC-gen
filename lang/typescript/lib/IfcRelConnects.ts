
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelConnectsElements} from "./IfcRelConnectsElements"
import {IfcRelConnectsPortToElement} from "./IfcRelConnectsPortToElement"
import {IfcRelConnectsPorts} from "./IfcRelConnectsPorts"
import {IfcRelConnectsStructuralActivity} from "./IfcRelConnectsStructuralActivity"
import {IfcRelConnectsStructuralMember} from "./IfcRelConnectsStructuralMember"
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure"
import {IfcRelCoversBldgElements} from "./IfcRelCoversBldgElements"
import {IfcRelCoversSpaces} from "./IfcRelCoversSpaces"
import {IfcRelFillsElement} from "./IfcRelFillsElement"
import {IfcRelFlowControlElements} from "./IfcRelFlowControlElements"
import {IfcRelInterferesElements} from "./IfcRelInterferesElements"
import {IfcRelReferencedInSpatialStructure} from "./IfcRelReferencedInSpatialStructure"
import {IfcRelSequence} from "./IfcRelSequence"
import {IfcRelServicesBuildings} from "./IfcRelServicesBuildings"
import {IfcRelSpaceBoundary} from "./IfcRelSpaceBoundary"
import {IfcRelationship} from "./IfcRelationship"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnects.htm
export abstract class IfcRelConnects extends IfcRelationship {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}