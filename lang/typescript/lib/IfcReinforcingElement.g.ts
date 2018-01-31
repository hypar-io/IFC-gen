
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
import {IfcObjectPlacement} from "./IfcObjectPlacement"
import {IfcProductRepresentation} from "./IfcProductRepresentation"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcRelFillsElement} from "./IfcRelFillsElement"
import {IfcRelConnectsElements} from "./IfcRelConnectsElements"
import {IfcRelInterferesElements} from "./IfcRelInterferesElements"
import {IfcRelProjectsElement} from "./IfcRelProjectsElement"
import {IfcRelReferencedInSpatialStructure} from "./IfcRelReferencedInSpatialStructure"
import {IfcRelVoidsElement} from "./IfcRelVoidsElement"
import {IfcRelConnectsWithRealizingElements} from "./IfcRelConnectsWithRealizingElements"
import {IfcRelSpaceBoundary} from "./IfcRelSpaceBoundary"
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure"
import {IfcRelCoversBldgElements} from "./IfcRelCoversBldgElements"
import {IfcReinforcingBar} from "./IfcReinforcingBar"
import {IfcReinforcingMesh} from "./IfcReinforcingMesh"
import {IfcTendon} from "./IfcTendon"
import {IfcTendonAnchor} from "./IfcTendonAnchor"
import {IfcElementComponent} from "./IfcElementComponent"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingelement.htm
export abstract class IfcReinforcingElement extends IfcElementComponent {
	SteelGrade : IfcLabel// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}