
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcModulusOfTranslationalSubgradeReactionSelect} from "./IfcModulusOfTranslationalSubgradeReactionSelect"
import {IfcModulusOfRotationalSubgradeReactionSelect} from "./IfcModulusOfRotationalSubgradeReactionSelect"
import {IfcBoundaryCondition} from "./IfcBoundaryCondition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundaryedgecondition.htm
export class IfcBoundaryEdgeCondition extends IfcBoundaryCondition {
	TranslationalStiffnessByLengthX : IfcModulusOfTranslationalSubgradeReactionSelect// optional
	TranslationalStiffnessByLengthY : IfcModulusOfTranslationalSubgradeReactionSelect// optional
	TranslationalStiffnessByLengthZ : IfcModulusOfTranslationalSubgradeReactionSelect// optional
	RotationalStiffnessByLengthX : IfcModulusOfRotationalSubgradeReactionSelect// optional
	RotationalStiffnessByLengthY : IfcModulusOfRotationalSubgradeReactionSelect// optional
	RotationalStiffnessByLengthZ : IfcModulusOfRotationalSubgradeReactionSelect// optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.TranslationalStiffnessByLengthX != null ? this.toStepValue(this.TranslationalStiffnessByLengthX) : "$");
		parameters.push(this.TranslationalStiffnessByLengthY != null ? this.toStepValue(this.TranslationalStiffnessByLengthY) : "$");
		parameters.push(this.TranslationalStiffnessByLengthZ != null ? this.toStepValue(this.TranslationalStiffnessByLengthZ) : "$");
		parameters.push(this.RotationalStiffnessByLengthX != null ? this.toStepValue(this.RotationalStiffnessByLengthX) : "$");
		parameters.push(this.RotationalStiffnessByLengthY != null ? this.toStepValue(this.RotationalStiffnessByLengthY) : "$");
		parameters.push(this.RotationalStiffnessByLengthZ != null ? this.toStepValue(this.RotationalStiffnessByLengthZ) : "$");

        return parameters.join();
    }
}