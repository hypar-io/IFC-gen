
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcElement} from "./IfcElement.g"
import {IfcStructuralItem} from "./IfcStructuralItem.g"
import {IfcStructuralActivity} from "./IfcStructuralActivity.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsstructuralactivity.htm
 */
export class IfcRelConnectsStructuralActivity extends IfcRelConnects {
	RelatingElement : IfcElement|IfcStructuralItem
	RelatedStructuralActivity : IfcStructuralActivity

    constructor(globalId : IfcGloballyUniqueId, relatingElement : IfcElement|IfcStructuralItem, relatedStructuralActivity : IfcStructuralActivity) {
        super(globalId)

		this.RelatingElement = relatingElement
		this.RelatedStructuralActivity = relatedStructuralActivity

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingElement))
		parameters.push(BaseIfc.toStepValue(this.RelatedStructuralActivity))

        return parameters.join();
    }
}