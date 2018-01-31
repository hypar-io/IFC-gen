
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
import {IfcBuildingElementPartType} from "./IfcBuildingElementPartType"
import {IfcDiscreteAccessoryType} from "./IfcDiscreteAccessoryType"
import {IfcFastenerType} from "./IfcFastenerType"
import {IfcMechanicalFastenerType} from "./IfcMechanicalFastenerType"
import {IfcReinforcingElementType} from "./IfcReinforcingElementType"
import {IfcVibrationIsolatorType} from "./IfcVibrationIsolatorType"
import {IfcElementType} from "./IfcElementType"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementcomponenttype.htm
export abstract class IfcElementComponentType extends IfcElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}