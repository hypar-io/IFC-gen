
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcModulusOfSubgradeReactionMeasure} from "./IfcModulusOfSubgradeReactionMeasure.g"
import {IfcBoundaryCondition} from "./IfcBoundaryCondition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundaryfacecondition.htm
 */
export class IfcBoundaryFaceCondition extends IfcBoundaryCondition {
	TranslationalStiffnessByAreaX : IfcBoolean|IfcModulusOfSubgradeReactionMeasure // optional
	TranslationalStiffnessByAreaY : IfcBoolean|IfcModulusOfSubgradeReactionMeasure // optional
	TranslationalStiffnessByAreaZ : IfcBoolean|IfcModulusOfSubgradeReactionMeasure // optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.TranslationalStiffnessByAreaX != null ? BaseIfc.toStepValue(this.TranslationalStiffnessByAreaX) : "$");
		parameters.push(this.TranslationalStiffnessByAreaY != null ? BaseIfc.toStepValue(this.TranslationalStiffnessByAreaY) : "$");
		parameters.push(this.TranslationalStiffnessByAreaZ != null ? BaseIfc.toStepValue(this.TranslationalStiffnessByAreaZ) : "$");

        return parameters.join();
    }
}