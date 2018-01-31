
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
import {IfcRelServicesBuildings} from "./IfcRelServicesBuildings"
import {IfcAnalysisModelTypeEnum} from "./IfcAnalysisModelTypeEnum"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcStructuralLoadGroup} from "./IfcStructuralLoadGroup"
import {IfcStructuralResultGroup} from "./IfcStructuralResultGroup"
import {IfcObjectPlacement} from "./IfcObjectPlacement"
import {IfcSystem} from "./IfcSystem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralanalysismodel.htm
export class IfcStructuralAnalysisModel extends IfcSystem {
	PredefinedType : IfcAnalysisModelTypeEnum
	OrientationOf2DPlane : IfcAxis2Placement3D// optional
	LoadedBy : Array<IfcStructuralLoadGroup>// optional
	HasResults : Array<IfcStructuralResultGroup>// optional
	SharedPlacement : IfcObjectPlacement// optional

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcAnalysisModelTypeEnum) {
        super(globalId)
		this.LoadedBy = new Array<IfcStructuralLoadGroup>()
		this.HasResults = new Array<IfcStructuralResultGroup>()

		this.PredefinedType = predefinedType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? this.toStepValue(this.ObjectType) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));
		parameters.push(this.OrientationOf2DPlane != null ? this.toStepValue(this.OrientationOf2DPlane) : "$");
		parameters.push(this.LoadedBy != null ? this.toStepValue(this.LoadedBy) : "$");
		parameters.push(this.HasResults != null ? this.toStepValue(this.HasResults) : "$");
		parameters.push(this.SharedPlacement != null ? this.toStepValue(this.SharedPlacement) : "$");

        return parameters.join();
    }
}