
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcTypeObject} from "./IfcTypeObject.g"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcDoorPanelOperationEnum} from "./IfcDoorPanelOperationEnum.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcDoorPanelPositionEnum} from "./IfcDoorPanelPositionEnum.g"
import {IfcShapeAspect} from "./IfcShapeAspect.g"
import {IfcPreDefinedPropertySet} from "./IfcPreDefinedPropertySet.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorpanelproperties.htm
 */
export class IfcDoorPanelProperties extends IfcPreDefinedPropertySet {
	PanelDepth : IfcPositiveLengthMeasure // optional
	PanelOperation : IfcDoorPanelOperationEnum
	PanelWidth : IfcNormalisedRatioMeasure // optional
	PanelPosition : IfcDoorPanelPositionEnum
	ShapeAspectStyle : IfcShapeAspect // optional

    constructor(globalId : IfcGloballyUniqueId, panelOperation : IfcDoorPanelOperationEnum, panelPosition : IfcDoorPanelPositionEnum) {
        super(globalId)

		this.PanelOperation = panelOperation
		this.PanelPosition = panelPosition

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.PanelDepth))
		parameters.push(BaseIfc.toStepValue(this.PanelOperation))
		parameters.push(BaseIfc.toStepValue(this.PanelWidth))
		parameters.push(BaseIfc.toStepValue(this.PanelPosition))
		parameters.push(BaseIfc.toStepValue(this.ShapeAspectStyle))

        return parameters.join();
    }
}