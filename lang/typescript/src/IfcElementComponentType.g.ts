
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
import {IfcBuildingElementPartType} from "./IfcBuildingElementPartType.g"
import {IfcDiscreteAccessoryType} from "./IfcDiscreteAccessoryType.g"
import {IfcFastenerType} from "./IfcFastenerType.g"
import {IfcMechanicalFastenerType} from "./IfcMechanicalFastenerType.g"
import {IfcReinforcingElementType} from "./IfcReinforcingElementType.g"
import {IfcVibrationIsolatorType} from "./IfcVibrationIsolatorType.g"
import {IfcElementType} from "./IfcElementType.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementcomponenttype.htm
export abstract class IfcElementComponentType extends IfcElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}