
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
import {IfcRelAssignsToGroup} from "./IfcRelAssignsToGroup.g"
import {IfcLoadGroupTypeEnum} from "./IfcLoadGroupTypeEnum.g"
import {IfcActionTypeEnum} from "./IfcActionTypeEnum.g"
import {IfcActionSourceTypeEnum} from "./IfcActionSourceTypeEnum.g"
import {IfcRatioMeasure} from "./IfcRatioMeasure.g"
import {IfcStructuralResultGroup} from "./IfcStructuralResultGroup.g"
import {IfcStructuralAnalysisModel} from "./IfcStructuralAnalysisModel.g"
import {IfcStructuralLoadGroup} from "./IfcStructuralLoadGroup.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadcase.htm
 */
export class IfcStructuralLoadCase extends IfcStructuralLoadGroup {
	SelfWeightCoefficients : Array<IfcRatioMeasure> // optional

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcLoadGroupTypeEnum, actionType : IfcActionTypeEnum, actionSource : IfcActionSourceTypeEnum) {
        super(globalId,predefinedType,actionType,actionSource)
		this.SelfWeightCoefficients = new Array<IfcRatioMeasure>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? BaseIfc.toStepValue(this.ObjectType) : "$");
		parameters.push(BaseIfc.toStepValue(this.PredefinedType));
		parameters.push(BaseIfc.toStepValue(this.ActionType));
		parameters.push(BaseIfc.toStepValue(this.ActionSource));
		parameters.push(this.Coefficient != null ? BaseIfc.toStepValue(this.Coefficient) : "$");
		parameters.push(this.Purpose != null ? BaseIfc.toStepValue(this.Purpose) : "$");
		parameters.push(this.SelfWeightCoefficients != null ? BaseIfc.toStepValue(this.SelfWeightCoefficients) : "$");

        return parameters.join();
    }
}