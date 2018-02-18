
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
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessByAreaX))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessByAreaY))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessByAreaZ))

        return parameters.join();
    }
}