
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

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprojectlibrary.htm
 */
export class IfcProjectLibrary extends IfcContext {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? BaseIfc.toStepValue(this.ObjectType) : "$");
		parameters.push(this.LongName != null ? BaseIfc.toStepValue(this.LongName) : "$");
		parameters.push(this.Phase != null ? BaseIfc.toStepValue(this.Phase) : "$");
		parameters.push(this.RepresentationContexts != null ? BaseIfc.toStepValue(this.RepresentationContexts) : "$");
		parameters.push(this.UnitsInContext != null ? BaseIfc.toStepValue(this.UnitsInContext) : "$");

        return parameters.join();
    }
}