
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
import {IfcActuatorType} from "./IfcActuatorType.g"
import {IfcAlarmType} from "./IfcAlarmType.g"
import {IfcControllerType} from "./IfcControllerType.g"
import {IfcFlowInstrumentType} from "./IfcFlowInstrumentType.g"
import {IfcProtectiveDeviceTrippingUnitType} from "./IfcProtectiveDeviceTrippingUnitType.g"
import {IfcSensorType} from "./IfcSensorType.g"
import {IfcUnitaryControlElementType} from "./IfcUnitaryControlElementType.g"
import {IfcDistributionElementType} from "./IfcDistributionElementType.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributioncontrolelementtype.htm
export abstract class IfcDistributionControlElementType extends IfcDistributionElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}