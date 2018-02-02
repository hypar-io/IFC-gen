
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcTextStyleForDefinedFont} from "./IfcTextStyleForDefinedFont.g"
import {IfcTextStyleTextModel} from "./IfcTextStyleTextModel.g"
import {IfcExternallyDefinedTextFont} from "./IfcExternallyDefinedTextFont.g"
import {IfcPreDefinedTextFont} from "./IfcPreDefinedTextFont.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcPresentationStyle} from "./IfcPresentationStyle.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstyle.htm
 */
export class IfcTextStyle extends IfcPresentationStyle {
	TextCharacterAppearance : IfcTextStyleForDefinedFont // optional
	TextStyle : IfcTextStyleTextModel // optional
	TextFontStyle : IfcExternallyDefinedTextFont|IfcPreDefinedTextFont
	ModelOrDraughting : IfcBoolean // optional

    constructor(textFontStyle : IfcExternallyDefinedTextFont|IfcPreDefinedTextFont) {
        super()

		this.TextFontStyle = textFontStyle

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.TextCharacterAppearance != null ? BaseIfc.toStepValue(this.TextCharacterAppearance) : "$");
		parameters.push(this.TextStyle != null ? BaseIfc.toStepValue(this.TextStyle) : "$");
		parameters.push(this.TextFontStyle != null ? BaseIfc.toStepValue(this.TextFontStyle) : "$");
		parameters.push(this.ModelOrDraughting != null ? BaseIfc.toStepValue(this.ModelOrDraughting) : "$");

        return parameters.join();
    }
}