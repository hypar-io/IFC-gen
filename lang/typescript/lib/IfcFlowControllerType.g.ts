
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
import {IfcAirTerminalBoxType} from "./IfcAirTerminalBoxType.g"
import {IfcDamperType} from "./IfcDamperType.g"
import {IfcElectricDistributionBoardType} from "./IfcElectricDistributionBoardType.g"
import {IfcElectricTimeControlType} from "./IfcElectricTimeControlType.g"
import {IfcFlowMeterType} from "./IfcFlowMeterType.g"
import {IfcProtectiveDeviceType} from "./IfcProtectiveDeviceType.g"
import {IfcSwitchingDeviceType} from "./IfcSwitchingDeviceType.g"
import {IfcValveType} from "./IfcValveType.g"
import {IfcDistributionFlowElementType} from "./IfcDistributionFlowElementType.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowcontrollertype.htm
export abstract class IfcFlowControllerType extends IfcDistributionFlowElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}