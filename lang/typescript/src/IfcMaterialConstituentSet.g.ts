
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcMaterialProperties} from "./IfcMaterialProperties.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcMaterialConstituent} from "./IfcMaterialConstituent.g"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialconstituentset.htm
 */
export class IfcMaterialConstituentSet extends IfcMaterialDefinition {
	Name : IfcLabel // optional
	Description : IfcText // optional
	MaterialConstituents : Array<IfcMaterialConstituent> // optional

    constructor() {
        super()
		this.MaterialConstituents = new Array<IfcMaterialConstituent>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.MaterialConstituents))

        return parameters.join();
    }
}