
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
import {IfcRelConnects} from "./IfcRelConnects.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsstructuralmember.htm
 */
export class IfcRelConnectsStructuralMember extends IfcRelConnects {
	RelatingStructuralMember : IfcStructuralMember
	RelatedStructuralConnection : IfcStructuralConnection
	AppliedCondition : IfcBoundaryCondition // optional
	AdditionalConditions : IfcStructuralConnectionCondition // optional
	SupportedLength : IfcLengthMeasure // optional
	ConditionCoordinateSystem : IfcAxis2Placement3D // optional

    constructor(globalId : IfcGloballyUniqueId, relatingStructuralMember : IfcStructuralMember, relatedStructuralConnection : IfcStructuralConnection) {
        super(globalId)
		this.RelatingStructuralMember = relatingStructuralMember
		this.RelatedStructuralConnection = relatedStructuralConnection

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingStructuralMember))
		parameters.push(BaseIfc.toStepValue(this.RelatedStructuralConnection))
		parameters.push(BaseIfc.toStepValue(this.AppliedCondition))
		parameters.push(BaseIfc.toStepValue(this.AdditionalConditions))
		parameters.push(BaseIfc.toStepValue(this.SupportedLength))
		parameters.push(BaseIfc.toStepValue(this.ConditionCoordinateSystem))

        return parameters.join();
    }
}