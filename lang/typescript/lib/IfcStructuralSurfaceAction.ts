
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
import {IfcProjectedOrTrueLengthEnum} from "./IfcProjectedOrTrueLengthEnum"
import {IfcStructuralSurfaceActivityTypeEnum} from "./IfcStructuralSurfaceActivityTypeEnum"
import {IfcStructuralPlanarAction} from "./IfcStructuralPlanarAction"
import {IfcStructuralAction} from "./IfcStructuralAction"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralsurfaceaction.htm
export class IfcStructuralSurfaceAction extends IfcStructuralAction {
	ProjectedOrTrue : IfcProjectedOrTrueLengthEnum// optional
	PredefinedType : IfcStructuralSurfaceActivityTypeEnum

    constructor(globalId : IfcGloballyUniqueId, appliedLoad : IfcStructuralLoad, globalOrLocal : IfcGlobalOrLocalEnum, predefinedType : IfcStructuralSurfaceActivityTypeEnum) {
        super(globalId,appliedLoad,globalOrLocal)

		this.PredefinedType = predefinedType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? this.toStepValue(this.ObjectType) : "$");
		parameters.push(this.ObjectPlacement != null ? this.toStepValue(this.ObjectPlacement) : "$");
		parameters.push(this.Representation != null ? this.toStepValue(this.Representation) : "$");
		parameters.push(this.AppliedLoad != null ? this.toStepValue(this.AppliedLoad) : "$");
		parameters.push(this.toStepValue(this.GlobalOrLocal));
		parameters.push(this.DestabilizingLoad != null ? this.toStepValue(this.DestabilizingLoad) : "$");
		parameters.push(this.toStepValue(this.ProjectedOrTrue));
		parameters.push(this.toStepValue(this.PredefinedType));

        return parameters.join();
    }
}