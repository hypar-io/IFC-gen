
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcText} from "./IfcText.g"
import {IfcProperty} from "./IfcProperty.g"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition.g"
import {IfcExtendedProperties} from "./IfcExtendedProperties.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialproperties.htm
 */
export class IfcMaterialProperties extends IfcExtendedProperties {
	Material : IfcMaterialDefinition

    constructor(properties : Array<IfcProperty>, material : IfcMaterialDefinition) {
        super(properties)

		this.Material = material

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Properties))
		parameters.push(BaseIfc.toStepValue(this.Material))

            return parameters.join();
        }
}