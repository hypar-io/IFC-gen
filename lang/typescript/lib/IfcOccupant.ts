
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
import {IfcActorSelect} from "./IfcActorSelect"
import {IfcRelAssignsToActor} from "./IfcRelAssignsToActor"
import {IfcOccupantTypeEnum} from "./IfcOccupantTypeEnum"
import {IfcActor} from "./IfcActor"

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