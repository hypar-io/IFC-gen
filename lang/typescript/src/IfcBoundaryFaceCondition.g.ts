
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcModulusOfSubgradeReactionSelect} from "./IfcModulusOfSubgradeReactionSelect.g"
import {IfcBoundaryCondition} from "./IfcBoundaryCondition.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundaryfacecondition.htm
export class IfcBoundaryFaceCondition extends IfcBoundaryCondition {
	TranslationalStiffnessByAreaX : IfcModulusOfSubgradeReactionSelect// optional
	TranslationalStiffnessByAreaY : IfcModulusOfSubgradeReactionSelect// optional
	TranslationalStiffnessByAreaZ : IfcModulusOfSubgradeReactionSelect// optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.TranslationalStiffnessByAreaX != null ? this.toStepValue(this.TranslationalStiffnessByAreaX) : "$");
		parameters.push(this.TranslationalStiffnessByAreaY != null ? this.toStepValue(this.TranslationalStiffnessByAreaY) : "$");
		parameters.push(this.TranslationalStiffnessByAreaZ != null ? this.toStepValue(this.TranslationalStiffnessByAreaZ) : "$");

        return parameters.join();
    }
}