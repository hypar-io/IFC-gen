
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcMaterialProperties} from "./IfcMaterialProperties.g"
import {IfcMaterialLayer} from "./IfcMaterialLayer.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayerset.htm
 */
export class IfcMaterialLayerSet extends IfcMaterialDefinition {
	MaterialLayers : Array<IfcMaterialLayer>
	LayerSetName : IfcLabel // optional
	Description : IfcText // optional

    get TotalThickness() : IfcLengthMeasure{throw "Derived property logic has not been implemented for TotalThickness."} // derived
    set TotalThickness(value : IfcLengthMeasure){super.TotalThickness = value}

    constructor(materialLayers : Array<IfcMaterialLayer>) {
        super()
		this.MaterialLayers = materialLayers

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.MaterialLayers))
		parameters.push(BaseIfc.toStepValue(this.LayerSetName))
		parameters.push(BaseIfc.toStepValue(this.Description))

        return parameters.join();
    }
}