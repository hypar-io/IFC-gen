
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcStructuralMember} from "./IfcStructuralMember.g"
import {IfcStructuralConnection} from "./IfcStructuralConnection.g"
import {IfcBoundaryCondition} from "./IfcBoundaryCondition.g"
import {IfcStructuralConnectionCondition} from "./IfcStructuralConnectionCondition.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcRelConnectsWithEccentricity} from "./IfcRelConnectsWithEccentricity.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsstructuralmember.htm
export class IfcRelConnectsStructuralMember extends IfcRelConnects {
	RelatingStructuralMember : IfcStructuralMember
	RelatedStructuralConnection : IfcStructuralConnection
	AppliedCondition : IfcBoundaryCondition// optional
	AdditionalConditions : IfcStructuralConnectionCondition// optional
	SupportedLength : IfcLengthMeasure// optional
	ConditionCoordinateSystem : IfcAxis2Placement3D// optional

    constructor(globalId : IfcGloballyUniqueId, relatingStructuralMember : IfcStructuralMember, relatedStructuralConnection : IfcStructuralConnection) {
        super(globalId)

		this.RelatingStructuralMember = relatingStructuralMember
		this.RelatedStructuralConnection = relatedStructuralConnection

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingStructuralMember != null ? this.toStepValue(this.RelatingStructuralMember) : "$");
		parameters.push(this.RelatedStructuralConnection != null ? this.toStepValue(this.RelatedStructuralConnection) : "$");
		parameters.push(this.AppliedCondition != null ? this.toStepValue(this.AppliedCondition) : "$");
		parameters.push(this.AdditionalConditions != null ? this.toStepValue(this.AdditionalConditions) : "$");
		parameters.push(this.SupportedLength != null ? this.toStepValue(this.SupportedLength) : "$");
		parameters.push(this.ConditionCoordinateSystem != null ? this.toStepValue(this.ConditionCoordinateSystem) : "$");

        return parameters.join();
    }
}