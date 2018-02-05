
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRepresentation} from "./IfcRepresentation.g"
import {IfcRepresentationItem} from "./IfcRepresentationItem.g"
import {IfcIdentifier} from "./IfcIdentifier.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationlayerassignment.htm
 */
export class IfcPresentationLayerAssignment extends BaseIfc {
	Name : IfcLabel
	Description : IfcText // optional
	AssignedItems : Array<IfcRepresentation|IfcRepresentationItem>
	Identifier : IfcIdentifier // optional

    constructor(name : IfcLabel, assignedItems : Array<IfcRepresentation|IfcRepresentationItem>) {
        super()

		this.Name = name
		this.AssignedItems = assignedItems

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.AssignedItems))
		parameters.push(BaseIfc.toStepValue(this.Identifier))

            return parameters.join();
        }
}