
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
import {IfcAnalysisTheoryTypeEnum} from "./IfcAnalysisTheoryTypeEnum"
import {IfcStructuralLoadGroup} from "./IfcStructuralLoadGroup"
import {IfcBoolean} from "./IfcBoolean"
import {IfcStructuralAnalysisModel} from "./IfcStructuralAnalysisModel"
import {IfcGroup} from "./IfcGroup"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralresultgroup.htm
export class IfcStructuralResultGroup extends IfcGroup {
	TheoryType : IfcAnalysisTheoryTypeEnum
	ResultForLoadGroup : IfcStructuralLoadGroup// optional
	IsLinear : IfcBoolean
	ResultGroupFor : Array<IfcStructuralAnalysisModel>// inverse

    constructor(globalId : IfcGloballyUniqueId, theoryType : IfcAnalysisTheoryTypeEnum, isLinear : IfcBoolean) {
        super(globalId)
		this.ResultGroupFor = new Array<IfcStructuralAnalysisModel>()

		this.TheoryType = theoryType
		this.IsLinear = isLinear

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? this.toStepValue(this.ObjectType) : "$");
		parameters.push(this.toStepValue(this.TheoryType));
		parameters.push(this.ResultForLoadGroup != null ? this.toStepValue(this.ResultForLoadGroup) : "$");
		parameters.push(this.IsLinear != null ? this.toStepValue(this.IsLinear) : "$");

        return parameters.join();
    }
}