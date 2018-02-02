
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcPreDefinedCurveFont} from "./IfcPreDefinedCurveFont.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingpredefinedcurvefont.htm
 */
export class IfcDraughtingPreDefinedCurveFont extends IfcPreDefinedCurveFont {

    constructor(name : IfcLabel) {
        super(name)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");

        return parameters.join();
    }
}