
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
import {IfcRepresentationContext} from "./IfcRepresentationContext.g"
import {IfcUnitAssignment} from "./IfcUnitAssignment.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcContext} from "./IfcContext.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproject.htm
export class IfcProject extends IfcContext {

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
		parameters.push(this.LongName != null ? this.toStepValue(this.LongName) : "$");
		parameters.push(this.Phase != null ? this.toStepValue(this.Phase) : "$");
		parameters.push(this.RepresentationContexts != null ? this.toStepValue(this.RepresentationContexts) : "$");
		parameters.push(this.UnitsInContext != null ? this.toStepValue(this.UnitsInContext) : "$");

        return parameters.join();
    }
}