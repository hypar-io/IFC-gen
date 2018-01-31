
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
import {IfcLayerSetDirectionEnum} from "./IfcLayerSetDirectionEnum.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcMaterialLayer} from "./IfcMaterialLayer.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayerwithoffsets.htm
export class IfcMaterialLayerWithOffsets extends IfcMaterialLayer {
	OffsetDirection : IfcLayerSetDirectionEnum
	OffsetValues : Array<IfcLengthMeasure>

    constructor(layerThickness : IfcNonNegativeLengthMeasure, offsetDirection : IfcLayerSetDirectionEnum, offsetValues : Array<IfcLengthMeasure>) {
        super(layerThickness)

		this.OffsetDirection = offsetDirection
		this.OffsetValues = offsetValues

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
		parameters.push(this.toStepValue(this.OffsetDirection));
		parameters.push(this.OffsetValues != null ? this.toStepValue(this.OffsetValues) : "$");

        return parameters.join();
    }
}