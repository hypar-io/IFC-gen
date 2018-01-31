
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

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowliningproperties.htm
export class IfcWindowLiningProperties extends IfcPreDefinedPropertySet {
	LiningDepth : IfcPositiveLengthMeasure// optional
	LiningThickness : IfcNonNegativeLengthMeasure// optional
	TransomThickness : IfcNonNegativeLengthMeasure// optional
	MullionThickness : IfcNonNegativeLengthMeasure// optional
	FirstTransomOffset : IfcNormalisedRatioMeasure// optional
	SecondTransomOffset : IfcNormalisedRatioMeasure// optional
	FirstMullionOffset : IfcNormalisedRatioMeasure// optional
	SecondMullionOffset : IfcNormalisedRatioMeasure// optional
	ShapeAspectStyle : IfcShapeAspect// optional
	LiningOffset : IfcLengthMeasure// optional
	LiningToPanelOffsetX : IfcLengthMeasure// optional
	LiningToPanelOffsetY : IfcLengthMeasure// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.LiningDepth != null ? this.toStepValue(this.LiningDepth) : "$");
		parameters.push(this.LiningThickness != null ? this.toStepValue(this.LiningThickness) : "$");
		parameters.push(this.TransomThickness != null ? this.toStepValue(this.TransomThickness) : "$");
		parameters.push(this.MullionThickness != null ? this.toStepValue(this.MullionThickness) : "$");
		parameters.push(this.FirstTransomOffset != null ? this.toStepValue(this.FirstTransomOffset) : "$");
		parameters.push(this.SecondTransomOffset != null ? this.toStepValue(this.SecondTransomOffset) : "$");
		parameters.push(this.FirstMullionOffset != null ? this.toStepValue(this.FirstMullionOffset) : "$");
		parameters.push(this.SecondMullionOffset != null ? this.toStepValue(this.SecondMullionOffset) : "$");
		parameters.push(this.ShapeAspectStyle != null ? this.toStepValue(this.ShapeAspectStyle) : "$");
		parameters.push(this.LiningOffset != null ? this.toStepValue(this.LiningOffset) : "$");
		parameters.push(this.LiningToPanelOffsetX != null ? this.toStepValue(this.LiningToPanelOffsetX) : "$");
		parameters.push(this.LiningToPanelOffsetY != null ? this.toStepValue(this.LiningToPanelOffsetY) : "$");

        return parameters.join();
    }
}