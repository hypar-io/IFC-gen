
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcProduct} from "./IfcProduct.g"
import {IfcSpatialElement} from "./IfcSpatialElement.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelreferencedinspatialstructure.htm
 */
export class IfcRelReferencedInSpatialStructure extends IfcRelConnects {
	RelatedElements : Array<IfcProduct>
	RelatingStructure : IfcSpatialElement

    constructor(globalId : IfcGloballyUniqueId, relatedElements : Array<IfcProduct>, relatingStructure : IfcSpatialElement) {
        super(globalId)
		this.RelatedElements = relatedElements
		this.RelatingStructure = relatingStructure

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedElements))
		parameters.push(BaseIfc.toStepValue(this.RelatingStructure))

        return parameters.join();
    }
}