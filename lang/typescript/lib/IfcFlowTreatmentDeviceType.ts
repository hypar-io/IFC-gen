
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
import {IfcDuctSilencerType} from "./IfcDuctSilencerType"
import {IfcFilterType} from "./IfcFilterType"
import {IfcInterceptorType} from "./IfcInterceptorType"
import {IfcDistributionFlowElementType} from "./IfcDistributionFlowElementType"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowtreatmentdevicetype.htm
export abstract class IfcFlowTreatmentDeviceType extends IfcDistributionFlowElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}