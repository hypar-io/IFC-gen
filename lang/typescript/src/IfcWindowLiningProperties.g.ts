
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
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.LiningDepth != null ? BaseIfc.toStepValue(this.LiningDepth) : "$");
		parameters.push(this.LiningThickness != null ? BaseIfc.toStepValue(this.LiningThickness) : "$");
		parameters.push(this.TransomThickness != null ? BaseIfc.toStepValue(this.TransomThickness) : "$");
		parameters.push(this.MullionThickness != null ? BaseIfc.toStepValue(this.MullionThickness) : "$");
		parameters.push(this.FirstTransomOffset != null ? BaseIfc.toStepValue(this.FirstTransomOffset) : "$");
		parameters.push(this.SecondTransomOffset != null ? BaseIfc.toStepValue(this.SecondTransomOffset) : "$");
		parameters.push(this.FirstMullionOffset != null ? BaseIfc.toStepValue(this.FirstMullionOffset) : "$");
		parameters.push(this.SecondMullionOffset != null ? BaseIfc.toStepValue(this.SecondMullionOffset) : "$");
		parameters.push(this.ShapeAspectStyle != null ? BaseIfc.toStepValue(this.ShapeAspectStyle) : "$");
		parameters.push(this.LiningOffset != null ? BaseIfc.toStepValue(this.LiningOffset) : "$");
		parameters.push(this.LiningToPanelOffsetX != null ? BaseIfc.toStepValue(this.LiningToPanelOffsetX) : "$");
		parameters.push(this.LiningToPanelOffsetY != null ? BaseIfc.toStepValue(this.LiningToPanelOffsetY) : "$");

        return parameters.join();
    }
}