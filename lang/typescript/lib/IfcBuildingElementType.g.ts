
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
import {IfcBeamType} from "./IfcBeamType"
import {IfcBuildingElementProxyType} from "./IfcBuildingElementProxyType"
import {IfcChimneyType} from "./IfcChimneyType"
import {IfcColumnType} from "./IfcColumnType"
import {IfcCoveringType} from "./IfcCoveringType"
import {IfcCurtainWallType} from "./IfcCurtainWallType"
import {IfcDoorType} from "./IfcDoorType"
import {IfcFootingType} from "./IfcFootingType"
import {IfcMemberType} from "./IfcMemberType"
import {IfcPileType} from "./IfcPileType"
import {IfcPlateType} from "./IfcPlateType"
import {IfcRailingType} from "./IfcRailingType"
import {IfcRampFlightType} from "./IfcRampFlightType"
import {IfcRampType} from "./IfcRampType"
import {IfcRoofType} from "./IfcRoofType"
import {IfcShadingDeviceType} from "./IfcShadingDeviceType"
import {IfcSlabType} from "./IfcSlabType"
import {IfcStairFlightType} from "./IfcStairFlightType"
import {IfcStairType} from "./IfcStairType"
import {IfcWallType} from "./IfcWallType"
import {IfcWindowType} from "./IfcWindowType"
import {IfcElementType} from "./IfcElementType"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuildingelementtype.htm
export abstract class IfcBuildingElementType extends IfcElementType {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
}