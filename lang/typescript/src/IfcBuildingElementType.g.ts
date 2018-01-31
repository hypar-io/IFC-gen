
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
import {IfcBeamType} from "./IfcBeamType.g"
import {IfcBuildingElementProxyType} from "./IfcBuildingElementProxyType.g"
import {IfcChimneyType} from "./IfcChimneyType.g"
import {IfcColumnType} from "./IfcColumnType.g"
import {IfcCoveringType} from "./IfcCoveringType.g"
import {IfcCurtainWallType} from "./IfcCurtainWallType.g"
import {IfcDoorType} from "./IfcDoorType.g"
import {IfcFootingType} from "./IfcFootingType.g"
import {IfcMemberType} from "./IfcMemberType.g"
import {IfcPileType} from "./IfcPileType.g"
import {IfcPlateType} from "./IfcPlateType.g"
import {IfcRailingType} from "./IfcRailingType.g"
import {IfcRampFlightType} from "./IfcRampFlightType.g"
import {IfcRampType} from "./IfcRampType.g"
import {IfcRoofType} from "./IfcRoofType.g"
import {IfcShadingDeviceType} from "./IfcShadingDeviceType.g"
import {IfcSlabType} from "./IfcSlabType.g"
import {IfcStairFlightType} from "./IfcStairFlightType.g"
import {IfcStairType} from "./IfcStairType.g"
import {IfcWallType} from "./IfcWallType.g"
import {IfcWindowType} from "./IfcWindowType.g"
import {IfcElementType} from "./IfcElementType.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuildingelementtype.htm
export abstract class IfcBuildingElementType extends IfcElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}