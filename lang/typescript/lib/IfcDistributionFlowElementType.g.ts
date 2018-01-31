
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
import {IfcDistributionChamberElementType} from "./IfcDistributionChamberElementType.g"
import {IfcEnergyConversionDeviceType} from "./IfcEnergyConversionDeviceType.g"
import {IfcFlowControllerType} from "./IfcFlowControllerType.g"
import {IfcFlowFittingType} from "./IfcFlowFittingType.g"
import {IfcFlowMovingDeviceType} from "./IfcFlowMovingDeviceType.g"
import {IfcFlowSegmentType} from "./IfcFlowSegmentType.g"
import {IfcFlowStorageDeviceType} from "./IfcFlowStorageDeviceType.g"
import {IfcFlowTerminalType} from "./IfcFlowTerminalType.g"
import {IfcFlowTreatmentDeviceType} from "./IfcFlowTreatmentDeviceType.g"
import {IfcDistributionElementType} from "./IfcDistributionElementType.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionflowelementtype.htm
export abstract class IfcDistributionFlowElementType extends IfcDistributionElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}