
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
import {IfcRepresentationMap} from "./IfcRepresentationMap"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct"
import {IfcSpatialStructureElementType} from "./IfcSpatialStructureElementType"
import {IfcSpatialZoneType} from "./IfcSpatialZoneType"
import {IfcTypeProduct} from "./IfcTypeProduct"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspatialelementtype.htm
export abstract class IfcSpatialElementType extends IfcTypeProduct {
	ElementType : IfcLabel// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}