
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
import {IfcMaterialDefinition} from "./IfcMaterialDefinition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayer.htm
 */
export class IfcMaterialLayer extends IfcMaterialDefinition {
	Material : IfcMaterial // optional
	LayerThickness : IfcNonNegativeLengthMeasure
	IsVentilated : IfcLogical // optional
	Name : IfcLabel // optional
	Description : IfcText // optional
	Category : IfcLabel // optional
	Priority : IfcInteger // optional
	ToMaterialLayerSet : IfcMaterialLayerSet // inverse

    constructor(layerThickness : IfcNonNegativeLengthMeasure) {
        super()
		this.LayerThickness = layerThickness

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Material))
		parameters.push(BaseIfc.toStepValue(this.LayerThickness))
		parameters.push(BaseIfc.toStepValue(this.IsVentilated))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Category))
		parameters.push(BaseIfc.toStepValue(this.Priority))

        return parameters.join();
    }
}