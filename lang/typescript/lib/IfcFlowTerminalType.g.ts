
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
import {IfcAirTerminalType} from "./IfcAirTerminalType.g"
import {IfcAudioVisualApplianceType} from "./IfcAudioVisualApplianceType.g"
import {IfcCommunicationsApplianceType} from "./IfcCommunicationsApplianceType.g"
import {IfcElectricApplianceType} from "./IfcElectricApplianceType.g"
import {IfcFireSuppressionTerminalType} from "./IfcFireSuppressionTerminalType.g"
import {IfcLampType} from "./IfcLampType.g"
import {IfcLightFixtureType} from "./IfcLightFixtureType.g"
import {IfcMedicalDeviceType} from "./IfcMedicalDeviceType.g"
import {IfcOutletType} from "./IfcOutletType.g"
import {IfcSanitaryTerminalType} from "./IfcSanitaryTerminalType.g"
import {IfcSpaceHeaterType} from "./IfcSpaceHeaterType.g"
import {IfcStackTerminalType} from "./IfcStackTerminalType.g"
import {IfcWasteTerminalType} from "./IfcWasteTerminalType.g"
import {IfcDistributionFlowElementType} from "./IfcDistributionFlowElementType.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowterminaltype.htm
export abstract class IfcFlowTerminalType extends IfcDistributionFlowElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}