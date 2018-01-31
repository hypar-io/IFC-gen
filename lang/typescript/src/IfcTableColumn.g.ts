
import {BaseIfc} from "./BaseIfc"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcUnit} from "./IfcUnit.g"
import {IfcReference} from "./IfcReference.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctablecolumn.htm
export class IfcTableColumn extends BaseIfc {
	Identifier : IfcIdentifier// optional
	Name : IfcLabel// optional
	Description : IfcText// optional
	Unit : IfcUnit// optional
	ReferencePath : IfcReference// optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Identifier != null ? this.toStepValue(this.Identifier) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Unit != null ? this.toStepValue(this.Unit) : "$");
		parameters.push(this.ReferencePath != null ? this.toStepValue(this.ReferencePath) : "$");

        return parameters.join();
    }
}