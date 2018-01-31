
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcMaterialProperties} from "./IfcMaterialProperties"
import {IfcMaterial} from "./IfcMaterial"
import {IfcNonNegativeLengthMeasure} from "./IfcNonNegativeLengthMeasure"
import {IfcLogical} from "./IfcLogical"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcInteger} from "./IfcInteger"
import {IfcMaterialLayerSet} from "./IfcMaterialLayerSet"
import {IfcMaterialLayerWithOffsets} from "./IfcMaterialLayerWithOffsets"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition"

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