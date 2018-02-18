
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcMaterialProperties} from "./IfcMaterialProperties.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcMaterialDefinitionRepresentation} from "./IfcMaterialDefinitionRepresentation.g"
import {IfcMaterialRelationship} from "./IfcMaterialRelationship.g"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterial.htm
 */
export class IfcMaterial extends IfcMaterialDefinition {
	Name : IfcLabel
	Description : IfcText // optional
	Category : IfcLabel // optional
	HasRepresentation : Array<IfcMaterialDefinitionRepresentation> // inverse
	IsRelatedWith : Array<IfcMaterialRelationship> // inverse
	RelatesTo : Array<IfcMaterialRelationship> // inverse

    constructor(name : IfcLabel) {
        super()
		this.Name = name

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Category))

        return parameters.join();
    }
}