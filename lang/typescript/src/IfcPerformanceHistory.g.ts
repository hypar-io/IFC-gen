
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
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcRelAssignsToControl} from "./IfcRelAssignsToControl.g"
import {IfcPerformanceHistoryTypeEnum} from "./IfcPerformanceHistoryTypeEnum.g"
import {IfcControl} from "./IfcControl.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcperformancehistory.htm
export class IfcPerformanceHistory extends IfcControl {
	LifeCyclePhase : IfcLabel
	PredefinedType : IfcPerformanceHistoryTypeEnum// optional

    constructor(globalId : IfcGloballyUniqueId, lifeCyclePhase : IfcLabel) {
        super(globalId)

		this.LifeCyclePhase = lifeCyclePhase

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? this.toStepValue(this.ObjectType) : "$");
		parameters.push(this.Identification != null ? this.toStepValue(this.Identification) : "$");
		parameters.push(this.LifeCyclePhase != null ? this.toStepValue(this.LifeCyclePhase) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));

        return parameters.join();
    }
}