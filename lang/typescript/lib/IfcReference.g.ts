
import {BaseIfc} from "./BaseIfc"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcInteger} from "./IfcInteger.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreference.htm
export class IfcReference extends BaseIfc {
	TypeIdentifier : IfcIdentifier// optional
	AttributeIdentifier : IfcIdentifier// optional
	InstanceName : IfcLabel// optional
	ListPositions : Array<IfcInteger>// optional
	InnerReference : IfcReference// optional

    constructor() {
        super()
		this.ListPositions = new Array<IfcInteger>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.TypeIdentifier != null ? this.toStepValue(this.TypeIdentifier) : "$");
		parameters.push(this.AttributeIdentifier != null ? this.toStepValue(this.AttributeIdentifier) : "$");
		parameters.push(this.InstanceName != null ? this.toStepValue(this.InstanceName) : "$");
		parameters.push(this.ListPositions != null ? this.toStepValue(this.ListPositions) : "$");
		parameters.push(this.InnerReference != null ? this.toStepValue(this.InnerReference) : "$");

        return parameters.join();
    }
}