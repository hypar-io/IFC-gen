
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
import {IfcAirTerminalType} from "./IfcAirTerminalType"
import {IfcAudioVisualApplianceType} from "./IfcAudioVisualApplianceType"
import {IfcCommunicationsApplianceType} from "./IfcCommunicationsApplianceType"
import {IfcElectricApplianceType} from "./IfcElectricApplianceType"
import {IfcFireSuppressionTerminalType} from "./IfcFireSuppressionTerminalType"
import {IfcLampType} from "./IfcLampType"
import {IfcLightFixtureType} from "./IfcLightFixtureType"
import {IfcMedicalDeviceType} from "./IfcMedicalDeviceType"
import {IfcOutletType} from "./IfcOutletType"
import {IfcSanitaryTerminalType} from "./IfcSanitaryTerminalType"
import {IfcSpaceHeaterType} from "./IfcSpaceHeaterType"
import {IfcStackTerminalType} from "./IfcStackTerminalType"
import {IfcWasteTerminalType} from "./IfcWasteTerminalType"
import {IfcDistributionFlowElementType} from "./IfcDistributionFlowElementType"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowterminaltype.htm
export abstract class IfcFlowTerminalType extends IfcDistributionFlowElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}