
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"
import {IfcPropertySetTemplate} from "./IfcPropertySetTemplate.g"
import {IfcRelDefines} from "./IfcRelDefines.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbytemplate.htm
 */
export class IfcRelDefinesByTemplate extends IfcRelDefines {
	RelatedPropertySets : Array<IfcPropertySetDefinition>
	RelatingTemplate : IfcPropertySetTemplate

    constructor(globalId : IfcGloballyUniqueId, relatedPropertySets : Array<IfcPropertySetDefinition>, relatingTemplate : IfcPropertySetTemplate) {
        super(globalId)
		this.RelatedPropertySets = relatedPropertySets
		this.RelatingTemplate = relatingTemplate

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedPropertySets))
		parameters.push(BaseIfc.toStepValue(this.RelatingTemplate))

        return parameters.join();
    }
}