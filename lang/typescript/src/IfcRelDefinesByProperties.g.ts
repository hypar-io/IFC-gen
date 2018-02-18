
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"
import {IfcPropertySetDefinitionSet} from "./IfcPropertySetDefinitionSet.g"
import {IfcRelDefines} from "./IfcRelDefines.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbyproperties.htm
 */
export class IfcRelDefinesByProperties extends IfcRelDefines {
	RelatedObjects : Array<IfcObjectDefinition>
	RelatingPropertyDefinition : IfcPropertySetDefinition|IfcPropertySetDefinitionSet

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>, relatingPropertyDefinition : IfcPropertySetDefinition|IfcPropertySetDefinitionSet) {
        super(globalId)

		this.RelatedObjects = relatedObjects
		this.RelatingPropertyDefinition = relatingPropertyDefinition

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))
		parameters.push(BaseIfc.toStepValue(this.RelatingPropertyDefinition))

        return parameters.join();
    }
}