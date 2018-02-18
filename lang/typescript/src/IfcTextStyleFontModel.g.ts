
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcTextFontName} from "./IfcTextFontName.g"
import {IfcFontStyle} from "./IfcFontStyle.g"
import {IfcFontVariant} from "./IfcFontVariant.g"
import {IfcFontWeight} from "./IfcFontWeight.g"
import {IfcDescriptiveMeasure} from "./IfcDescriptiveMeasure.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.g"
import {IfcRatioMeasure} from "./IfcRatioMeasure.g"
import {IfcPreDefinedTextFont} from "./IfcPreDefinedTextFont.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstylefontmodel.htm
 */
export class IfcTextStyleFontModel extends IfcPreDefinedTextFont {
	FontFamily : Array<IfcTextFontName>
	FontStyle : IfcFontStyle // optional
	FontVariant : IfcFontVariant // optional
	FontWeight : IfcFontWeight // optional
	FontSize : IfcDescriptiveMeasure|IfcLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveLengthMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure

    constructor(name : IfcLabel, fontFamily : Array<IfcTextFontName>, fontSize : IfcDescriptiveMeasure|IfcLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveLengthMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure) {
        super(name)

		this.FontFamily = fontFamily
		this.FontSize = fontSize

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.FontFamily))
		parameters.push(BaseIfc.toStepValue(this.FontStyle))
		parameters.push(BaseIfc.toStepValue(this.FontVariant))
		parameters.push(BaseIfc.toStepValue(this.FontWeight))
		parameters.push(BaseIfc.toStepValue(this.FontSize))

        return parameters.join();
    }
}