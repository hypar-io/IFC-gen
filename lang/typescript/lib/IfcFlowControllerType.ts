
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
import {IfcAirTerminalBoxType} from "./IfcAirTerminalBoxType"
import {IfcDamperType} from "./IfcDamperType"
import {IfcElectricDistributionBoardType} from "./IfcElectricDistributionBoardType"
import {IfcElectricTimeControlType} from "./IfcElectricTimeControlType"
import {IfcFlowMeterType} from "./IfcFlowMeterType"
import {IfcProtectiveDeviceType} from "./IfcProtectiveDeviceType"
import {IfcSwitchingDeviceType} from "./IfcSwitchingDeviceType"
import {IfcValveType} from "./IfcValveType"
import {IfcDistributionFlowElementType} from "./IfcDistributionFlowElementType"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowcontrollertype.htm
export abstract class IfcFlowControllerType extends IfcDistributionFlowElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}