
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcMaterial} from "./IfcMaterial.g"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialrelationship.htm
 */
export class IfcMaterialRelationship extends IfcResourceLevelRelationship {
	RelatingMaterial : IfcMaterial
	RelatedMaterials : Array<IfcMaterial>
	Expression : IfcLabel // optional

    constructor(relatingMaterial : IfcMaterial, relatedMaterials : Array<IfcMaterial>) {
        super()

		this.RelatingMaterial = relatingMaterial
		this.RelatedMaterials = relatedMaterials

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingMaterial))
		parameters.push(BaseIfc.toStepValue(this.RelatedMaterials))
		parameters.push(BaseIfc.toStepValue(this.Expression))

        return parameters.join();
    }
}