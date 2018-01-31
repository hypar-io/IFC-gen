
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
import {IfcReinforcingBarType} from "./IfcReinforcingBarType"
import {IfcReinforcingMeshType} from "./IfcReinforcingMeshType"
import {IfcTendonAnchorType} from "./IfcTendonAnchorType"
import {IfcTendonType} from "./IfcTendonType"
import {IfcElementComponentType} from "./IfcElementComponentType"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingelementtype.htm
export abstract class IfcReinforcingElementType extends IfcElementComponentType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}