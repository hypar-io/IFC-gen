
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
import {IfcActuatorType} from "./IfcActuatorType"
import {IfcAlarmType} from "./IfcAlarmType"
import {IfcControllerType} from "./IfcControllerType"
import {IfcFlowInstrumentType} from "./IfcFlowInstrumentType"
import {IfcProtectiveDeviceTrippingUnitType} from "./IfcProtectiveDeviceTrippingUnitType"
import {IfcSensorType} from "./IfcSensorType"
import {IfcUnitaryControlElementType} from "./IfcUnitaryControlElementType"
import {IfcDistributionElementType} from "./IfcDistributionElementType"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributioncontrolelementtype.htm
export abstract class IfcDistributionControlElementType extends IfcDistributionElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}