
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
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.g"
import {IfcRelConnectsStructuralMember} from "./IfcRelConnectsStructuralMember.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectswitheccentricity.htm
 */
export class IfcRelConnectsWithEccentricity extends IfcRelConnectsStructuralMember {
	ConnectionConstraint : IfcConnectionGeometry

    constructor(globalId : IfcGloballyUniqueId, relatingStructuralMember : IfcStructuralMember, relatedStructuralConnection : IfcStructuralConnection, connectionConstraint : IfcConnectionGeometry) {
        super(globalId,relatingStructuralMember,relatedStructuralConnection)

		this.ConnectionConstraint = connectionConstraint

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingStructuralMember != null ? BaseIfc.toStepValue(this.RelatingStructuralMember) : "$");
		parameters.push(this.RelatedStructuralConnection != null ? BaseIfc.toStepValue(this.RelatedStructuralConnection) : "$");
		parameters.push(this.AppliedCondition != null ? BaseIfc.toStepValue(this.AppliedCondition) : "$");
		parameters.push(this.AdditionalConditions != null ? BaseIfc.toStepValue(this.AdditionalConditions) : "$");
		parameters.push(this.SupportedLength != null ? BaseIfc.toStepValue(this.SupportedLength) : "$");
		parameters.push(this.ConditionCoordinateSystem != null ? BaseIfc.toStepValue(this.ConditionCoordinateSystem) : "$");
		parameters.push(this.ConnectionConstraint != null ? BaseIfc.toStepValue(this.ConnectionConstraint) : "$");

        return parameters.join();
    }
}