
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
import {IfcCableCarrierSegmentType} from "./IfcCableCarrierSegmentType"
import {IfcCableSegmentType} from "./IfcCableSegmentType"
import {IfcDuctSegmentType} from "./IfcDuctSegmentType"
import {IfcPipeSegmentType} from "./IfcPipeSegmentType"
import {IfcDistributionFlowElementType} from "./IfcDistributionFlowElementType"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowsegmenttype.htm
export abstract class IfcFlowSegmentType extends IfcDistributionFlowElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}