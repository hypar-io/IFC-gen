
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
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcRelAssignsToControl} from "./IfcRelAssignsToControl"
import {IfcActionRequestTypeEnum} from "./IfcActionRequestTypeEnum"
import {IfcControl} from "./IfcControl"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcactionrequest.htm
export class IfcActionRequest extends IfcControl {
	PredefinedType : IfcActionRequestTypeEnum// optional
	Status : IfcLabel// optional
	LongDescription : IfcText// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? this.toStepValue(this.ObjectType) : "$");
		parameters.push(this.Identification != null ? this.toStepValue(this.Identification) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));
		parameters.push(this.Status != null ? this.toStepValue(this.Status) : "$");
		parameters.push(this.LongDescription != null ? this.toStepValue(this.LongDescription) : "$");

        return parameters.join();
    }
}