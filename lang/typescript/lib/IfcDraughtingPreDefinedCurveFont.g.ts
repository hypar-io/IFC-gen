
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcPreDefinedCurveFont} from "./IfcPreDefinedCurveFont"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingpredefinedcurvefont.htm
export class IfcDraughtingPreDefinedCurveFont extends IfcPreDefinedCurveFont {

    constructor(name : IfcLabel) {
        super(name)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");

        return parameters.join();
    }
}