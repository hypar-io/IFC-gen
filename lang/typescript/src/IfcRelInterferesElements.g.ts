
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcElement} from "./IfcElement.g"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelinterfereselements.htm
 */
export class IfcRelInterferesElements extends IfcRelConnects {
	RelatingElement : IfcElement
	RelatedElement : IfcElement
	InterferenceGeometry : IfcConnectionGeometry // optional
	InterferenceType : IfcIdentifier // optional
	ImpliedOrder : boolean

    constructor(globalId : IfcGloballyUniqueId, relatingElement : IfcElement, relatedElement : IfcElement, impliedOrder : boolean) {
        super(globalId)
		this.RelatingElement = relatingElement
		this.RelatedElement = relatedElement
		this.ImpliedOrder = impliedOrder

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingElement))
		parameters.push(BaseIfc.toStepValue(this.RelatedElement))
		parameters.push(BaseIfc.toStepValue(this.InterferenceGeometry))
		parameters.push(BaseIfc.toStepValue(this.InterferenceType))
		parameters.push(BaseIfc.toStepValue(this.ImpliedOrder))

        return parameters.join();
    }
}