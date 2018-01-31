
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcBooleanOperator} from "./IfcBooleanOperator.g"
import {IfcBooleanOperand} from "./IfcBooleanOperand.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcBooleanResult} from "./IfcBooleanResult.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbooleanclippingresult.htm
export class IfcBooleanClippingResult extends IfcBooleanResult {

    constructor(op : IfcBooleanOperator, firstOperand : IfcBooleanOperand, secondOperand : IfcBooleanOperand) {
        super(op,firstOperand,secondOperand)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Operator != null ? this.toStepValue(this.Operator) : "$");
		parameters.push(this.FirstOperand != null ? this.toStepValue(this.FirstOperand) : "$");
		parameters.push(this.SecondOperand != null ? this.toStepValue(this.SecondOperand) : "$");

        return parameters.join();
    }
}