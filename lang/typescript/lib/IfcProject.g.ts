
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
import {IfcRepresentationContext} from "./IfcRepresentationContext"
import {IfcUnitAssignment} from "./IfcUnitAssignment"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties"
import {IfcContext} from "./IfcContext"

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