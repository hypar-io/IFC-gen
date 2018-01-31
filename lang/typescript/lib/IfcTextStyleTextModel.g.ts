
import {BaseIfc} from "./BaseIfc"
import {IfcSizeSelect} from "./IfcSizeSelect"
import {IfcTextAlignment} from "./IfcTextAlignment"
import {IfcTextDecoration} from "./IfcTextDecoration"
import {IfcTextTransformation} from "./IfcTextTransformation"
import {IfcPresentationItem} from "./IfcPresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstyletextmodel.htm
export class IfcTextStyleTextModel extends IfcPresentationItem {
	TextIndent : IfcSizeSelect// optional
	TextAlign : IfcTextAlignment// optional
	TextDecoration : IfcTextDecoration// optional
	LetterSpacing : IfcSizeSelect// optional
	WordSpacing : IfcSizeSelect// optional
	TextTransform : IfcTextTransformation// optional
	LineHeight : IfcSizeSelect// optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.TextIndent != null ? this.toStepValue(this.TextIndent) : "$");
		parameters.push(this.TextAlign != null ? this.toStepValue(this.TextAlign) : "$");
		parameters.push(this.TextDecoration != null ? this.toStepValue(this.TextDecoration) : "$");
		parameters.push(this.LetterSpacing != null ? this.toStepValue(this.LetterSpacing) : "$");
		parameters.push(this.WordSpacing != null ? this.toStepValue(this.WordSpacing) : "$");
		parameters.push(this.TextTransform != null ? this.toStepValue(this.TextTransform) : "$");
		parameters.push(this.LineHeight != null ? this.toStepValue(this.LineHeight) : "$");

        return parameters.join();
    }
}