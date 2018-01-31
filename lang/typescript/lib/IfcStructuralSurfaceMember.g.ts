
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
import {IfcRelConnectsStructuralActivity} from "./IfcRelConnectsStructuralActivity"
import {IfcRelConnectsStructuralMember} from "./IfcRelConnectsStructuralMember"
import {IfcStructuralSurfaceMemberTypeEnum} from "./IfcStructuralSurfaceMemberTypeEnum"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcStructuralSurfaceMemberVarying} from "./IfcStructuralSurfaceMemberVarying"
import {IfcStructuralMember} from "./IfcStructuralMember"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralsurfacemember.htm
export class IfcStructuralSurfaceMember extends IfcStructuralMember {
	PredefinedType : IfcStructuralSurfaceMemberTypeEnum
	Thickness : IfcPositiveLengthMeasure// optional

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcStructuralSurfaceMemberTypeEnum) {
        super(globalId)

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
		parameters.push(this.toStepValue(this.PredefinedType));
		parameters.push(this.Thickness != null ? this.toStepValue(this.Thickness) : "$");

        return parameters.join();
    }
}