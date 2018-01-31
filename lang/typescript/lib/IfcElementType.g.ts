
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
import {IfcBuildingElementType} from "./IfcBuildingElementType"
import {IfcCivilElementType} from "./IfcCivilElementType"
import {IfcDistributionElementType} from "./IfcDistributionElementType"
import {IfcElementAssemblyType} from "./IfcElementAssemblyType"
import {IfcElementComponentType} from "./IfcElementComponentType"
import {IfcFurnishingElementType} from "./IfcFurnishingElementType"
import {IfcGeographicElementType} from "./IfcGeographicElementType"
import {IfcTransportElementType} from "./IfcTransportElementType"
import {IfcTypeProduct} from "./IfcTypeProduct"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementtype.htm
export abstract class IfcElementType extends IfcTypeProduct {
	ElementType : IfcLabel// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}