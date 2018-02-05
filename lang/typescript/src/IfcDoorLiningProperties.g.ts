
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
import {IfcNonNegativeLengthMeasure} from "./IfcNonNegativeLengthMeasure.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcShapeAspect} from "./IfcShapeAspect.g"
import {IfcPreDefinedPropertySet} from "./IfcPreDefinedPropertySet.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorliningproperties.htm
 */
export class IfcDoorLiningProperties extends IfcPreDefinedPropertySet {
	LiningDepth : IfcPositiveLengthMeasure // optional
	LiningThickness : IfcNonNegativeLengthMeasure // optional
	ThresholdDepth : IfcPositiveLengthMeasure // optional
	ThresholdThickness : IfcNonNegativeLengthMeasure // optional
	TransomThickness : IfcNonNegativeLengthMeasure // optional
	TransomOffset : IfcLengthMeasure // optional
	LiningOffset : IfcLengthMeasure // optional
	ThresholdOffset : IfcLengthMeasure // optional
	CasingThickness : IfcPositiveLengthMeasure // optional
	CasingDepth : IfcPositiveLengthMeasure // optional
	ShapeAspectStyle : IfcShapeAspect // optional
	LiningToPanelOffsetX : IfcLengthMeasure // optional
	LiningToPanelOffsetY : IfcLengthMeasure // optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.LiningDepth))
		parameters.push(BaseIfc.toStepValue(this.LiningThickness))
		parameters.push(BaseIfc.toStepValue(this.ThresholdDepth))
		parameters.push(BaseIfc.toStepValue(this.ThresholdThickness))
		parameters.push(BaseIfc.toStepValue(this.TransomThickness))
		parameters.push(BaseIfc.toStepValue(this.TransomOffset))
		parameters.push(BaseIfc.toStepValue(this.LiningOffset))
		parameters.push(BaseIfc.toStepValue(this.ThresholdOffset))
		parameters.push(BaseIfc.toStepValue(this.CasingThickness))
		parameters.push(BaseIfc.toStepValue(this.CasingDepth))
		parameters.push(BaseIfc.toStepValue(this.ShapeAspectStyle))
		parameters.push(BaseIfc.toStepValue(this.LiningToPanelOffsetX))
		parameters.push(BaseIfc.toStepValue(this.LiningToPanelOffsetY))

            return parameters.join();
        }
}