
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
import {IfcPermeableCoveringOperationEnum} from "./IfcPermeableCoveringOperationEnum.g"
import {IfcWindowPanelPositionEnum} from "./IfcWindowPanelPositionEnum.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcShapeAspect} from "./IfcShapeAspect.g"
import {IfcPreDefinedPropertySet} from "./IfcPreDefinedPropertySet.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpermeablecoveringproperties.htm
 */
export class IfcPermeableCoveringProperties extends IfcPreDefinedPropertySet {
	OperationType : IfcPermeableCoveringOperationEnum
	PanelPosition : IfcWindowPanelPositionEnum
	FrameDepth : IfcPositiveLengthMeasure // optional
	FrameThickness : IfcPositiveLengthMeasure // optional
	ShapeAspectStyle : IfcShapeAspect // optional

    constructor(globalId : IfcGloballyUniqueId, operationType : IfcPermeableCoveringOperationEnum, panelPosition : IfcWindowPanelPositionEnum) {
        super(globalId)
		this.OperationType = operationType
		this.PanelPosition = panelPosition

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.OperationType))
		parameters.push(BaseIfc.toStepValue(this.PanelPosition))
		parameters.push(BaseIfc.toStepValue(this.FrameDepth))
		parameters.push(BaseIfc.toStepValue(this.FrameThickness))
		parameters.push(BaseIfc.toStepValue(this.ShapeAspectStyle))

        return parameters.join();
    }
}