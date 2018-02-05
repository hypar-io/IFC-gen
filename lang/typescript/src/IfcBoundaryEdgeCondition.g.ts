
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcModulusOfLinearSubgradeReactionMeasure} from "./IfcModulusOfLinearSubgradeReactionMeasure.g"
import {IfcModulusOfRotationalSubgradeReactionMeasure} from "./IfcModulusOfRotationalSubgradeReactionMeasure.g"
import {IfcBoundaryCondition} from "./IfcBoundaryCondition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundaryedgecondition.htm
 */
export class IfcBoundaryEdgeCondition extends IfcBoundaryCondition {
	TranslationalStiffnessByLengthX : IfcBoolean|IfcModulusOfLinearSubgradeReactionMeasure // optional
	TranslationalStiffnessByLengthY : IfcBoolean|IfcModulusOfLinearSubgradeReactionMeasure // optional
	TranslationalStiffnessByLengthZ : IfcBoolean|IfcModulusOfLinearSubgradeReactionMeasure // optional
	RotationalStiffnessByLengthX : IfcBoolean|IfcModulusOfRotationalSubgradeReactionMeasure // optional
	RotationalStiffnessByLengthY : IfcBoolean|IfcModulusOfRotationalSubgradeReactionMeasure // optional
	RotationalStiffnessByLengthZ : IfcBoolean|IfcModulusOfRotationalSubgradeReactionMeasure // optional

    constructor() {
        super()

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessByLengthX))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessByLengthY))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessByLengthZ))
		parameters.push(BaseIfc.toStepValue(this.RotationalStiffnessByLengthX))
		parameters.push(BaseIfc.toStepValue(this.RotationalStiffnessByLengthY))
		parameters.push(BaseIfc.toStepValue(this.RotationalStiffnessByLengthZ))

            return parameters.join();
        }
}