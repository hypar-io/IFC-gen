
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
import {IfcAirToAirHeatRecoveryType} from "./IfcAirToAirHeatRecoveryType.g"
import {IfcBoilerType} from "./IfcBoilerType.g"
import {IfcBurnerType} from "./IfcBurnerType.g"
import {IfcChillerType} from "./IfcChillerType.g"
import {IfcCoilType} from "./IfcCoilType.g"
import {IfcCondenserType} from "./IfcCondenserType.g"
import {IfcCooledBeamType} from "./IfcCooledBeamType.g"
import {IfcCoolingTowerType} from "./IfcCoolingTowerType.g"
import {IfcElectricGeneratorType} from "./IfcElectricGeneratorType.g"
import {IfcElectricMotorType} from "./IfcElectricMotorType.g"
import {IfcEngineType} from "./IfcEngineType.g"
import {IfcEvaporativeCoolerType} from "./IfcEvaporativeCoolerType.g"
import {IfcEvaporatorType} from "./IfcEvaporatorType.g"
import {IfcHeatExchangerType} from "./IfcHeatExchangerType.g"
import {IfcHumidifierType} from "./IfcHumidifierType.g"
import {IfcMotorConnectionType} from "./IfcMotorConnectionType.g"
import {IfcSolarDeviceType} from "./IfcSolarDeviceType.g"
import {IfcTransformerType} from "./IfcTransformerType.g"
import {IfcTubeBundleType} from "./IfcTubeBundleType.g"
import {IfcUnitaryEquipmentType} from "./IfcUnitaryEquipmentType.g"
import {IfcDistributionFlowElementType} from "./IfcDistributionFlowElementType.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcenergyconversiondevicetype.htm
export abstract class IfcEnergyConversionDeviceType extends IfcDistributionFlowElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}