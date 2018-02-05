
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
import {IfcAnalysisTheoryTypeEnum} from "./IfcAnalysisTheoryTypeEnum.g"
import {IfcStructuralLoadGroup} from "./IfcStructuralLoadGroup.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcStructuralAnalysisModel} from "./IfcStructuralAnalysisModel.g"
import {IfcGroup} from "./IfcGroup.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralresultgroup.htm
 */
export class IfcStructuralResultGroup extends IfcGroup {
	TheoryType : IfcAnalysisTheoryTypeEnum
	ResultForLoadGroup : IfcStructuralLoadGroup // optional
	IsLinear : IfcBoolean
	ResultGroupFor : Array<IfcStructuralAnalysisModel> // inverse

    constructor(globalId : IfcGloballyUniqueId, theoryType : IfcAnalysisTheoryTypeEnum, isLinear : IfcBoolean) {
        super(globalId)
		this.ResultGroupFor = new Array<IfcStructuralAnalysisModel>()

		this.TheoryType = theoryType
		this.IsLinear = isLinear

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.TheoryType))
		parameters.push(BaseIfc.toStepValue(this.ResultForLoadGroup))
		parameters.push(BaseIfc.toStepValue(this.IsLinear))

            return parameters.join();
        }
}