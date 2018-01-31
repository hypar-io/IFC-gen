
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcMaterial} from "./IfcMaterial"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialrelationship.htm
export class IfcMaterialRelationship extends IfcResourceLevelRelationship {
	RelatingMaterial : IfcMaterial
	RelatedMaterials : Array<IfcMaterial>
	Expression : IfcLabel// optional

    constructor(relatingMaterial : IfcMaterial, relatedMaterials : Array<IfcMaterial>) {
        super()

		this.RelatingMaterial = relatingMaterial
		this.RelatedMaterials = relatedMaterials

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingMaterial != null ? this.toStepValue(this.RelatingMaterial) : "$");
		parameters.push(this.RelatedMaterials != null ? this.toStepValue(this.RelatedMaterials) : "$");
		parameters.push(this.Expression != null ? this.toStepValue(this.Expression) : "$");

        return parameters.join();
    }
}