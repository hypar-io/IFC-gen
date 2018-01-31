
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcLayeredItem} from "./IfcLayeredItem"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcPresentationLayerWithStyle} from "./IfcPresentationLayerWithStyle"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationlayerassignment.htm
export class IfcPresentationLayerAssignment extends BaseIfc {
	Name : IfcLabel
	Description : IfcText// optional
	AssignedItems : Array<IfcLayeredItem>
	Identifier : IfcIdentifier// optional

    constructor(name : IfcLabel, assignedItems : Array<IfcLayeredItem>) {
        super()

		this.Name = name
		this.AssignedItems = assignedItems

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.AssignedItems != null ? this.toStepValue(this.AssignedItems) : "$");
		parameters.push(this.Identifier != null ? this.toStepValue(this.Identifier) : "$");

        return parameters.join();
    }
}