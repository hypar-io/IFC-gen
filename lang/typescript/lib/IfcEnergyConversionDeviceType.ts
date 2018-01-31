
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
import {IfcAirToAirHeatRecoveryType} from "./IfcAirToAirHeatRecoveryType"
import {IfcBoilerType} from "./IfcBoilerType"
import {IfcBurnerType} from "./IfcBurnerType"
import {IfcChillerType} from "./IfcChillerType"
import {IfcCoilType} from "./IfcCoilType"
import {IfcCondenserType} from "./IfcCondenserType"
import {IfcCooledBeamType} from "./IfcCooledBeamType"
import {IfcCoolingTowerType} from "./IfcCoolingTowerType"
import {IfcElectricGeneratorType} from "./IfcElectricGeneratorType"
import {IfcElectricMotorType} from "./IfcElectricMotorType"
import {IfcEngineType} from "./IfcEngineType"
import {IfcEvaporativeCoolerType} from "./IfcEvaporativeCoolerType"
import {IfcEvaporatorType} from "./IfcEvaporatorType"
import {IfcHeatExchangerType} from "./IfcHeatExchangerType"
import {IfcHumidifierType} from "./IfcHumidifierType"
import {IfcMotorConnectionType} from "./IfcMotorConnectionType"
import {IfcSolarDeviceType} from "./IfcSolarDeviceType"
import {IfcTransformerType} from "./IfcTransformerType"
import {IfcTubeBundleType} from "./IfcTubeBundleType"
import {IfcUnitaryEquipmentType} from "./IfcUnitaryEquipmentType"
import {IfcDistributionFlowElementType} from "./IfcDistributionFlowElementType"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcenergyconversiondevicetype.htm
export abstract class IfcEnergyConversionDeviceType extends IfcDistributionFlowElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}