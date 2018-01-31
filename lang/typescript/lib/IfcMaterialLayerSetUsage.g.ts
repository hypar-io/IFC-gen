
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"
import {IfcMaterialLayerSet} from "./IfcMaterialLayerSet.g"
import {IfcLayerSetDirectionEnum} from "./IfcLayerSetDirectionEnum.g"
import {IfcDirectionSenseEnum} from "./IfcDirectionSenseEnum.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcMaterialUsageDefinition} from "./IfcMaterialUsageDefinition.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayersetusage.htm
export class IfcMaterialLayerSetUsage extends IfcMaterialUsageDefinition {
	ForLayerSet : IfcMaterialLayerSet
	LayerSetDirection : IfcLayerSetDirectionEnum
	DirectionSense : IfcDirectionSenseEnum
	OffsetFromReferenceLine : IfcLengthMeasure
	ReferenceExtent : IfcPositiveLengthMeasure// optional

    constructor(forLayerSet : IfcMaterialLayerSet, layerSetDirection : IfcLayerSetDirectionEnum, directionSense : IfcDirectionSenseEnum, offsetFromReferenceLine : IfcLengthMeasure) {
        super()

		this.ForLayerSet = forLayerSet
		this.LayerSetDirection = layerSetDirection
		this.DirectionSense = directionSense
		this.OffsetFromReferenceLine = offsetFromReferenceLine

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.ForLayerSet != null ? this.toStepValue(this.ForLayerSet) : "$");
		parameters.push(this.toStepValue(this.LayerSetDirection));
		parameters.push(this.toStepValue(this.DirectionSense));
		parameters.push(this.OffsetFromReferenceLine != null ? this.toStepValue(this.OffsetFromReferenceLine) : "$");
		parameters.push(this.ReferenceExtent != null ? this.toStepValue(this.ReferenceExtent) : "$");

        return parameters.join();
    }
}