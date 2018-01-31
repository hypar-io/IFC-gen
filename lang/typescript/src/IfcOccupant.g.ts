
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
import {IfcActorSelect} from "./IfcActorSelect.g"
import {IfcRelAssignsToActor} from "./IfcRelAssignsToActor.g"
import {IfcOccupantTypeEnum} from "./IfcOccupantTypeEnum.g"
import {IfcActor} from "./IfcActor.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcoccupant.htm
export class IfcOccupant extends IfcActor {
	PredefinedType : IfcOccupantTypeEnum// optional

    constructor(globalId : IfcGloballyUniqueId, theActor : IfcActorSelect) {
        super(globalId,theActor)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? this.toStepValue(this.ObjectType) : "$");
		parameters.push(this.TheActor != null ? this.toStepValue(this.TheActor) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));

        return parameters.join();
    }
}