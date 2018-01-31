
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcMaterialProperties} from "./IfcMaterialProperties"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcMaterial} from "./IfcMaterial"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure"
import {IfcMaterialConstituentSet} from "./IfcMaterialConstituentSet"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialconstituent.htm
export class IfcMaterialConstituent extends IfcMaterialDefinition {
	Name : IfcLabel// optional
	Description : IfcText// optional
	Material : IfcMaterial
	Fraction : IfcNormalisedRatioMeasure// optional
	Category : IfcLabel// optional
	ToMaterialConstituentSet : IfcMaterialConstituentSet// inverse

    constructor(material : IfcMaterial) {
        super()

		this.Material = material

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Material != null ? this.toStepValue(this.Material) : "$");
		parameters.push(this.Fraction != null ? this.toStepValue(this.Fraction) : "$");
		parameters.push(this.Category != null ? this.toStepValue(this.Category) : "$");

        return parameters.join();
    }
}