
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
import {IfcRelConnectsStructuralActivity} from "./IfcRelConnectsStructuralActivity.g"
import {IfcRelConnectsStructuralMember} from "./IfcRelConnectsStructuralMember.g"
import {IfcStructuralSurfaceMemberTypeEnum} from "./IfcStructuralSurfaceMemberTypeEnum.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcStructuralSurfaceMember} from "./IfcStructuralSurfaceMember.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralsurfacemembervarying.htm
export class IfcStructuralSurfaceMemberVarying extends IfcStructuralSurfaceMember {

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcStructuralSurfaceMemberTypeEnum) {
        super(globalId,predefinedType)

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
		parameters.push(this.toStepValue(this.PredefinedType));
		parameters.push(this.Thickness != null ? this.toStepValue(this.Thickness) : "$");

        return parameters.join();
    }
}