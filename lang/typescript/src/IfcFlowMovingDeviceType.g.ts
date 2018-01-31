
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
import {IfcCompressorType} from "./IfcCompressorType.g"
import {IfcFanType} from "./IfcFanType.g"
import {IfcPumpType} from "./IfcPumpType.g"
import {IfcDistributionFlowElementType} from "./IfcDistributionFlowElementType.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowmovingdevicetype.htm
export abstract class IfcFlowMovingDeviceType extends IfcDistributionFlowElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}