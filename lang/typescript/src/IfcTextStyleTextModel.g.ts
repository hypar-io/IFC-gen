
import {BaseIfc} from "./BaseIfc"
import {IfcDescriptiveMeasure} from "./IfcDescriptiveMeasure.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.g"
import {IfcRatioMeasure} from "./IfcRatioMeasure.g"
import {IfcTextAlignment} from "./IfcTextAlignment.g"
import {IfcTextDecoration} from "./IfcTextDecoration.g"
import {IfcTextTransformation} from "./IfcTextTransformation.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstyletextmodel.htm
 */
export class IfcTextStyleTextModel extends IfcPresentationItem {
	TextIndent : IfcDescriptiveMeasure|IfcLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveLengthMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure // optional
	TextAlign : IfcTextAlignment // optional
	TextDecoration : IfcTextDecoration // optional
	LetterSpacing : IfcDescriptiveMeasure|IfcLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveLengthMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure // optional
	WordSpacing : IfcDescriptiveMeasure|IfcLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveLengthMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure // optional
	TextTransform : IfcTextTransformation // optional
	LineHeight : IfcDescriptiveMeasure|IfcLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveLengthMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure // optional

    constructor() {
        super()
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.TextIndent))
		parameters.push(BaseIfc.toStepValue(this.TextAlign))
		parameters.push(BaseIfc.toStepValue(this.TextDecoration))
		parameters.push(BaseIfc.toStepValue(this.LetterSpacing))
		parameters.push(BaseIfc.toStepValue(this.WordSpacing))
		parameters.push(BaseIfc.toStepValue(this.TextTransform))
		parameters.push(BaseIfc.toStepValue(this.LineHeight))

        return parameters.join();
    }
}