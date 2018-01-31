
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcText} from "./IfcText"
import {IfcProperty} from "./IfcProperty"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition"
import {IfcExtendedProperties} from "./IfcExtendedProperties"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialproperties.htm
export class IfcMaterialProperties extends IfcExtendedProperties {
	Material : IfcMaterialDefinition

    constructor(properties : Array<IfcProperty>, material : IfcMaterialDefinition) {
        super(properties)

		this.Material = material

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Properties != null ? this.toStepValue(this.Properties) : "$");
		parameters.push(this.Material != null ? this.toStepValue(this.Material) : "$");

        return parameters.join();
    }
}