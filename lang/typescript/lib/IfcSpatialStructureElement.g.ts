
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
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure"
import {IfcRelServicesBuildings} from "./IfcRelServicesBuildings"
import {IfcRelReferencedInSpatialStructure} from "./IfcRelReferencedInSpatialStructure"
import {IfcElementCompositionEnum} from "./IfcElementCompositionEnum"
import {IfcBuilding} from "./IfcBuilding"
import {IfcBuildingStorey} from "./IfcBuildingStorey"
import {IfcSite} from "./IfcSite"
import {IfcSpace} from "./IfcSpace"
import {IfcSpatialElement} from "./IfcSpatialElement"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspatialstructureelement.htm
export abstract class IfcSpatialStructureElement extends IfcSpatialElement {
	CompositionType : IfcElementCompositionEnum// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}