
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
import {IfcRelAssignsToGroup} from "./IfcRelAssignsToGroup"
import {IfcLoadGroupTypeEnum} from "./IfcLoadGroupTypeEnum"
import {IfcActionTypeEnum} from "./IfcActionTypeEnum"
import {IfcActionSourceTypeEnum} from "./IfcActionSourceTypeEnum"
import {IfcRatioMeasure} from "./IfcRatioMeasure"
import {IfcStructuralResultGroup} from "./IfcStructuralResultGroup"
import {IfcStructuralAnalysisModel} from "./IfcStructuralAnalysisModel"
import {IfcStructuralLoadCase} from "./IfcStructuralLoadCase"
import {IfcGroup} from "./IfcGroup"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadgroup.htm
export class IfcStructuralLoadGroup extends IfcGroup {
	PredefinedType : IfcLoadGroupTypeEnum
	ActionType : IfcActionTypeEnum
	ActionSource : IfcActionSourceTypeEnum
	Coefficient : IfcRatioMeasure// optional
	Purpose : IfcLabel// optional
	SourceOfResultGroup : Array<IfcStructuralResultGroup>// inverse
	LoadGroupFor : Array<IfcStructuralAnalysisModel>// inverse

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
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? this.toStepValue(this.ObjectType) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));
		parameters.push(this.toStepValue(this.ActionType));
		parameters.push(this.toStepValue(this.ActionSource));
		parameters.push(this.Coefficient != null ? this.toStepValue(this.Coefficient) : "$");
		parameters.push(this.Purpose != null ? this.toStepValue(this.Purpose) : "$");

        return parameters.join();
    }
}