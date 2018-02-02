
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
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.TranslationalStiffnessByLengthX != null ? BaseIfc.toStepValue(this.TranslationalStiffnessByLengthX) : "$");
		parameters.push(this.TranslationalStiffnessByLengthY != null ? BaseIfc.toStepValue(this.TranslationalStiffnessByLengthY) : "$");
		parameters.push(this.TranslationalStiffnessByLengthZ != null ? BaseIfc.toStepValue(this.TranslationalStiffnessByLengthZ) : "$");
		parameters.push(this.RotationalStiffnessByLengthX != null ? BaseIfc.toStepValue(this.RotationalStiffnessByLengthX) : "$");
		parameters.push(this.RotationalStiffnessByLengthY != null ? BaseIfc.toStepValue(this.RotationalStiffnessByLengthY) : "$");
		parameters.push(this.RotationalStiffnessByLengthZ != null ? BaseIfc.toStepValue(this.RotationalStiffnessByLengthZ) : "$");

        return parameters.join();
    }
}