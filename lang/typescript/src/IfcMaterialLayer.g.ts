
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcMaterialProperties} from "./IfcMaterialProperties.g"
import {IfcMaterial} from "./IfcMaterial.g"
import {IfcNonNegativeLengthMeasure} from "./IfcNonNegativeLengthMeasure.g"
import {IfcLogical} from "./IfcLogical.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcMaterialLayerSet} from "./IfcMaterialLayerSet.g"
import {IfcMaterialLayerWithOffsets} from "./IfcMaterialLayerWithOffsets.g"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayer.htm
export class IfcMaterialLayer extends IfcMaterialDefinition {
	Material : IfcMaterial// optional
	LayerThickness : IfcNonNegativeLengthMeasure
	IsVentilated : IfcLogical// optional
	Name : IfcLabel// optional
	Description : IfcText// optional
	Category : IfcLabel// optional
	Priority : IfcInteger// optional
	ToMaterialLayerSet : IfcMaterialLayerSet// inverse

    constructor(layerThickness : IfcNonNegativeLengthMeasure) {
        super()

		this.LayerThickness = layerThickness

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Material != null ? this.toStepValue(this.Material) : "$");
		parameters.push(this.LayerThickness != null ? this.toStepValue(this.LayerThickness) : "$");
		parameters.push(this.IsVentilated != null ? this.toStepValue(this.IsVentilated) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Category != null ? this.toStepValue(this.Category) : "$");
		parameters.push(this.Priority != null ? this.toStepValue(this.Priority) : "$");

        return parameters.join();
    }
}