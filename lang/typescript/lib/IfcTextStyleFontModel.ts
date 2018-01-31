
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcTextFontName} from "./IfcTextFontName"
import {IfcFontStyle} from "./IfcFontStyle"
import {IfcFontVariant} from "./IfcFontVariant"
import {IfcFontWeight} from "./IfcFontWeight"
import {IfcSizeSelect} from "./IfcSizeSelect"
import {IfcPreDefinedTextFont} from "./IfcPreDefinedTextFont"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstylefontmodel.htm
export class IfcTextStyleFontModel extends IfcPreDefinedTextFont {
	FontFamily : Array<IfcTextFontName>
	FontStyle : IfcFontStyle// optional
	FontVariant : IfcFontVariant// optional
	FontWeight : IfcFontWeight// optional
	FontSize : IfcSizeSelect

    constructor(name : IfcLabel, fontFamily : Array<IfcTextFontName>, fontSize : IfcSizeSelect) {
        super(name)

		this.FontFamily = fontFamily
		this.FontSize = fontSize

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.FontFamily != null ? this.toStepValue(this.FontFamily) : "$");
		parameters.push(this.FontStyle != null ? this.toStepValue(this.FontStyle) : "$");
		parameters.push(this.FontVariant != null ? this.toStepValue(this.FontVariant) : "$");
		parameters.push(this.FontWeight != null ? this.toStepValue(this.FontWeight) : "$");
		parameters.push(this.FontSize != null ? this.toStepValue(this.FontSize) : "$");

        return parameters.join();
    }
}