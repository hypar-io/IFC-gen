
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcContext} from "./IfcContext.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition.g"
import {IfcRelationship} from "./IfcRelationship.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldeclares.htm
 */
export class IfcRelDeclares extends IfcRelationship {
	RelatingContext : IfcContext
	RelatedDefinitions : Array<IfcObjectDefinition|IfcPropertyDefinition>

    constructor(globalId : IfcGloballyUniqueId, relatingContext : IfcContext, relatedDefinitions : Array<IfcObjectDefinition|IfcPropertyDefinition>) {
        super(globalId)

		this.RelatingContext = relatingContext
		this.RelatedDefinitions = relatedDefinitions

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingContext))
		parameters.push(BaseIfc.toStepValue(this.RelatedDefinitions))

            return parameters.join();
        }
}