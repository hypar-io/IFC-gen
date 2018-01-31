
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcPreDefinedColour} from "./IfcPreDefinedColour.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingpredefinedcolour.htm
export class IfcDraughtingPreDefinedColour extends IfcPreDefinedColour {

    constructor(name : IfcLabel) {
        super(name)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");

        return parameters.join();
    }
}