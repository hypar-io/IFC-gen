
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
		parameters.push(this.TextIndent != null ? BaseIfc.toStepValue(this.TextIndent) : "$");
		parameters.push(this.TextAlign != null ? BaseIfc.toStepValue(this.TextAlign) : "$");
		parameters.push(this.TextDecoration != null ? BaseIfc.toStepValue(this.TextDecoration) : "$");
		parameters.push(this.LetterSpacing != null ? BaseIfc.toStepValue(this.LetterSpacing) : "$");
		parameters.push(this.WordSpacing != null ? BaseIfc.toStepValue(this.WordSpacing) : "$");
		parameters.push(this.TextTransform != null ? BaseIfc.toStepValue(this.TextTransform) : "$");
		parameters.push(this.LineHeight != null ? BaseIfc.toStepValue(this.LineHeight) : "$");

        return parameters.join();
    }
}