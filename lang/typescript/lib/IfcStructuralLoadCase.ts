
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
import {IfcStructuralLoadGroup} from "./IfcStructuralLoadGroup"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadcase.htm
export class IfcStructuralLoadCase extends IfcStructuralLoadGroup {
	SelfWeightCoefficients : Array<IfcRatioMeasure>// optional

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcLoadGroupTypeEnum, actionType : IfcActionTypeEnum, actionSource : IfcActionSourceTypeEnum) {
        super(globalId,predefinedType,actionType,actionSource)
		this.SelfWeightCoefficients = new Array<IfcRatioMeasure>()

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
		parameters.push(this.SelfWeightCoefficients != null ? this.toStepValue(this.SelfWeightCoefficients) : "$");

        return parameters.join();
    }
}