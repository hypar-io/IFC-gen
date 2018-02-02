
import {BaseIfc} from "./BaseIfc"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcDerivedUnit} from "./IfcDerivedUnit.g"
import {IfcMonetaryUnit} from "./IfcMonetaryUnit.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"
import {IfcReference} from "./IfcReference.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctablecolumn.htm
 */
export class IfcTableColumn extends BaseIfc {
	Identifier : IfcIdentifier // optional
	Name : IfcLabel // optional
	Description : IfcText // optional
	Unit : IfcDerivedUnit|IfcMonetaryUnit|IfcNamedUnit // optional
	ReferencePath : IfcReference // optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Identifier != null ? BaseIfc.toStepValue(this.Identifier) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.Unit != null ? BaseIfc.toStepValue(this.Unit) : "$");
		parameters.push(this.ReferencePath != null ? BaseIfc.toStepValue(this.ReferencePath) : "$");

        return parameters.join();
    }
}