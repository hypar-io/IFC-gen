
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
import {IfcCableCarrierSegmentType} from "./IfcCableCarrierSegmentType.g"
import {IfcCableSegmentType} from "./IfcCableSegmentType.g"
import {IfcDuctSegmentType} from "./IfcDuctSegmentType.g"
import {IfcPipeSegmentType} from "./IfcPipeSegmentType.g"
import {IfcDistributionFlowElementType} from "./IfcDistributionFlowElementType.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowsegmenttype.htm
export abstract class IfcFlowSegmentType extends IfcDistributionFlowElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}