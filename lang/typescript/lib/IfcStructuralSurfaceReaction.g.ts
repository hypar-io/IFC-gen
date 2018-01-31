
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
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcObjectPlacement} from "./IfcObjectPlacement.g"
import {IfcProductRepresentation} from "./IfcProductRepresentation.g"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct.g"
import {IfcStructuralLoad} from "./IfcStructuralLoad.g"
import {IfcGlobalOrLocalEnum} from "./IfcGlobalOrLocalEnum.g"
import {IfcRelConnectsStructuralActivity} from "./IfcRelConnectsStructuralActivity.g"
import {IfcStructuralSurfaceActivityTypeEnum} from "./IfcStructuralSurfaceActivityTypeEnum.g"
import {IfcStructuralReaction} from "./IfcStructuralReaction.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralsurfacereaction.htm
export class IfcStructuralSurfaceReaction extends IfcStructuralReaction {
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
		parameters.push(this.toStepValue(this.PredefinedType));

        return parameters.join();
    }
}