
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
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcShapeAspect} from "./IfcShapeAspect.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcPreDefinedPropertySet} from "./IfcPreDefinedPropertySet.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowliningproperties.htm
 */
export class IfcWindowLiningProperties extends IfcPreDefinedPropertySet {
	LiningDepth : IfcPositiveLengthMeasure // optional
	LiningThickness : IfcNonNegativeLengthMeasure // optional
	TransomThickness : IfcNonNegativeLengthMeasure // optional
	MullionThickness : IfcNonNegativeLengthMeasure // optional
	FirstTransomOffset : IfcNormalisedRatioMeasure // optional
	SecondTransomOffset : IfcNormalisedRatioMeasure // optional
	FirstMullionOffset : IfcNormalisedRatioMeasure // optional
	SecondMullionOffset : IfcNormalisedRatioMeasure // optional
	ShapeAspectStyle : IfcShapeAspect // optional
	LiningOffset : IfcLengthMeasure // optional
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
		parameters.push(BaseIfc.toStepValue(this.TransomThickness))
		parameters.push(BaseIfc.toStepValue(this.MullionThickness))
		parameters.push(BaseIfc.toStepValue(this.FirstTransomOffset))
		parameters.push(BaseIfc.toStepValue(this.SecondTransomOffset))
		parameters.push(BaseIfc.toStepValue(this.FirstMullionOffset))
		parameters.push(BaseIfc.toStepValue(this.SecondMullionOffset))
		parameters.push(BaseIfc.toStepValue(this.ShapeAspectStyle))
		parameters.push(BaseIfc.toStepValue(this.LiningOffset))
		parameters.push(BaseIfc.toStepValue(this.LiningToPanelOffsetX))
		parameters.push(BaseIfc.toStepValue(this.LiningToPanelOffsetY))

        return parameters.join();
    }
}