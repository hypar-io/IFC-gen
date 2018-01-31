
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
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties"
import {IfcObjectPlacement} from "./IfcObjectPlacement"
import {IfcProductRepresentation} from "./IfcProductRepresentation"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct"
import {IfcStructuralLoad} from "./IfcStructuralLoad"
import {IfcGlobalOrLocalEnum} from "./IfcGlobalOrLocalEnum"
import {IfcRelConnectsStructuralActivity} from "./IfcRelConnectsStructuralActivity"
import {IfcBoolean} from "./IfcBoolean"
import {IfcStructuralCurveAction} from "./IfcStructuralCurveAction"
import {IfcStructuralPointAction} from "./IfcStructuralPointAction"
import {IfcStructuralSurfaceAction} from "./IfcStructuralSurfaceAction"
import {IfcStructuralActivity} from "./IfcStructuralActivity"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralaction.htm
export abstract class IfcStructuralAction extends IfcStructuralActivity {
	DestabilizingLoad : IfcBoolean// optional

    constructor(globalId : IfcGloballyUniqueId, appliedLoad : IfcStructuralLoad, globalOrLocal : IfcGlobalOrLocalEnum) {
        super(globalId,appliedLoad,globalOrLocal)

    }
}