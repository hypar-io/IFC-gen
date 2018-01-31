
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"
import {IfcRelNests} from "./IfcRelNests.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAggregates} from "./IfcRelAggregates.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRepresentationMap} from "./IfcRepresentationMap.g"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct.g"
import {IfcReinforcingBarType} from "./IfcReinforcingBarType.g"
import {IfcReinforcingMeshType} from "./IfcReinforcingMeshType.g"
import {IfcTendonAnchorType} from "./IfcTendonAnchorType.g"
import {IfcTendonType} from "./IfcTendonType.g"
import {IfcElementComponentType} from "./IfcElementComponentType.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingelementtype.htm
export abstract class IfcReinforcingElementType extends IfcElementComponentType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}