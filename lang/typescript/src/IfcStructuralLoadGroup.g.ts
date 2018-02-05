
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
import {IfcGroup} from "./IfcGroup.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadgroup.htm
 */
export class IfcStructuralLoadGroup extends IfcGroup {
	PredefinedType : IfcLoadGroupTypeEnum
	ActionType : IfcActionTypeEnum
	ActionSource : IfcActionSourceTypeEnum
	Coefficient : IfcRatioMeasure // optional
	Purpose : IfcLabel // optional
	SourceOfResultGroup : Array<IfcStructuralResultGroup> // inverse
	LoadGroupFor : Array<IfcStructuralAnalysisModel> // inverse

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcLoadGroupTypeEnum, actionType : IfcActionTypeEnum, actionSource : IfcActionSourceTypeEnum) {
        super(globalId)
		this.SourceOfResultGroup = new Array<IfcStructuralResultGroup>()
		this.LoadGroupFor = new Array<IfcStructuralAnalysisModel>()

		this.PredefinedType = predefinedType
		this.ActionType = actionType
		this.ActionSource = actionSource

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))
		parameters.push(BaseIfc.toStepValue(this.ActionType))
		parameters.push(BaseIfc.toStepValue(this.ActionSource))
		parameters.push(BaseIfc.toStepValue(this.Coefficient))
		parameters.push(BaseIfc.toStepValue(this.Purpose))

            return parameters.join();
        }
}