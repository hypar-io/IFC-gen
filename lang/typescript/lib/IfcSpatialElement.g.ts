
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
import {IfcExternalSpatialStructureElement} from "./IfcExternalSpatialStructureElement"
import {IfcSpatialStructureElement} from "./IfcSpatialStructureElement"
import {IfcSpatialZone} from "./IfcSpatialZone"
import {IfcProduct} from "./IfcProduct"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspatialelement.htm
export abstract class IfcSpatialElement extends IfcProduct {
	LongName : IfcLabel// optional
	ContainsElements : Array<IfcRelContainedInSpatialStructure>// inverse
	ServicedBySystems : Array<IfcRelServicesBuildings>// inverse
	ReferencesElements : Array<IfcRelReferencedInSpatialStructure>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.ContainsElements = new Array<IfcRelContainedInSpatialStructure>()
		this.ServicedBySystems = new Array<IfcRelServicesBuildings>()
		this.ReferencesElements = new Array<IfcRelReferencedInSpatialStructure>()

    }
}