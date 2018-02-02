
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcTypeObject} from "./IfcTypeObject.g"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcSectionReinforcementProperties} from "./IfcSectionReinforcementProperties.g"
import {IfcPreDefinedPropertySet} from "./IfcPreDefinedPropertySet.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcementdefinitionproperties.htm
 */
export class IfcReinforcementDefinitionProperties extends IfcPreDefinedPropertySet {
	DefinitionType : IfcLabel // optional
	ReinforcementSectionDefinitions : Array<IfcSectionReinforcementProperties>

    constructor(globalId : IfcGloballyUniqueId, reinforcementSectionDefinitions : Array<IfcSectionReinforcementProperties>) {
        super(globalId)

		this.ReinforcementSectionDefinitions = reinforcementSectionDefinitions

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.DefinitionType != null ? BaseIfc.toStepValue(this.DefinitionType) : "$");
		parameters.push(this.ReinforcementSectionDefinitions != null ? BaseIfc.toStepValue(this.ReinforcementSectionDefinitions) : "$");

        return parameters.join();
    }
}