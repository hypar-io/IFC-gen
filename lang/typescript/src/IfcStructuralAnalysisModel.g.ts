
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
import {IfcRelServicesBuildings} from "./IfcRelServicesBuildings.g"
import {IfcAnalysisModelTypeEnum} from "./IfcAnalysisModelTypeEnum.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcStructuralLoadGroup} from "./IfcStructuralLoadGroup.g"
import {IfcStructuralResultGroup} from "./IfcStructuralResultGroup.g"
import {IfcObjectPlacement} from "./IfcObjectPlacement.g"
import {IfcSystem} from "./IfcSystem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralanalysismodel.htm
 */
export class IfcStructuralAnalysisModel extends IfcSystem {
	PredefinedType : IfcAnalysisModelTypeEnum
	OrientationOf2DPlane : IfcAxis2Placement3D // optional
	LoadedBy : Array<IfcStructuralLoadGroup> // optional
	HasResults : Array<IfcStructuralResultGroup> // optional
	SharedPlacement : IfcObjectPlacement // optional

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcAnalysisModelTypeEnum) {
        super(globalId)
		this.LoadedBy = new Array<IfcStructuralLoadGroup>()
		this.HasResults = new Array<IfcStructuralResultGroup>()

		this.PredefinedType = predefinedType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? BaseIfc.toStepValue(this.ObjectType) : "$");
		parameters.push(BaseIfc.toStepValue(this.PredefinedType));
		parameters.push(this.OrientationOf2DPlane != null ? BaseIfc.toStepValue(this.OrientationOf2DPlane) : "$");
		parameters.push(this.LoadedBy != null ? BaseIfc.toStepValue(this.LoadedBy) : "$");
		parameters.push(this.HasResults != null ? BaseIfc.toStepValue(this.HasResults) : "$");
		parameters.push(this.SharedPlacement != null ? BaseIfc.toStepValue(this.SharedPlacement) : "$");

        return parameters.join();
    }
}