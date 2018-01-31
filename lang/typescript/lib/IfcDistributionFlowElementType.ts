
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
import {IfcDistributionChamberElementType} from "./IfcDistributionChamberElementType"
import {IfcEnergyConversionDeviceType} from "./IfcEnergyConversionDeviceType"
import {IfcFlowControllerType} from "./IfcFlowControllerType"
import {IfcFlowFittingType} from "./IfcFlowFittingType"
import {IfcFlowMovingDeviceType} from "./IfcFlowMovingDeviceType"
import {IfcFlowSegmentType} from "./IfcFlowSegmentType"
import {IfcFlowStorageDeviceType} from "./IfcFlowStorageDeviceType"
import {IfcFlowTerminalType} from "./IfcFlowTerminalType"
import {IfcFlowTreatmentDeviceType} from "./IfcFlowTreatmentDeviceType"
import {IfcDistributionElementType} from "./IfcDistributionElementType"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionflowelementtype.htm
export abstract class IfcDistributionFlowElementType extends IfcDistributionElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}