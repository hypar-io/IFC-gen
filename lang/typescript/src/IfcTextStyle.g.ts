
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcTextStyleForDefinedFont} from "./IfcTextStyleForDefinedFont.g"
import {IfcTextStyleTextModel} from "./IfcTextStyleTextModel.g"
import {IfcTextFontSelect} from "./IfcTextFontSelect.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcPresentationStyle} from "./IfcPresentationStyle.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstyle.htm
export class IfcTextStyle extends IfcPresentationStyle {
	TextCharacterAppearance : IfcTextStyleForDefinedFont// optional
	TextStyle : IfcTextStyleTextModel// optional
	TextFontStyle : IfcTextFontSelect
	ModelOrDraughting : IfcBoolean// optional

    constructor(textFontStyle : IfcTextFontSelect) {
        super()

		this.TextFontStyle = textFontStyle

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.TextCharacterAppearance != null ? this.toStepValue(this.TextCharacterAppearance) : "$");
		parameters.push(this.TextStyle != null ? this.toStepValue(this.TextStyle) : "$");
		parameters.push(this.TextFontStyle != null ? this.toStepValue(this.TextFontStyle) : "$");
		parameters.push(this.ModelOrDraughting != null ? this.toStepValue(this.ModelOrDraughting) : "$");

        return parameters.join();
    }
}