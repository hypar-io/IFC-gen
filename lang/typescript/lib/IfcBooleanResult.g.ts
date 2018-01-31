
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcBooleanOperator} from "./IfcBooleanOperator"
import {IfcBooleanOperand} from "./IfcBooleanOperand"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcBooleanClippingResult} from "./IfcBooleanClippingResult"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbooleanresult.htm
export class IfcBooleanResult extends IfcGeometricRepresentationItem {
	Operator : IfcBooleanOperator
	FirstOperand : IfcBooleanOperand
	SecondOperand : IfcBooleanOperand

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(op : IfcBooleanOperator, firstOperand : IfcBooleanOperand, secondOperand : IfcBooleanOperand) {
        super()

		this.Operator = op
		this.FirstOperand = firstOperand
		this.SecondOperand = secondOperand

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Operator != null ? this.toStepValue(this.Operator) : "$");
		parameters.push(this.FirstOperand != null ? this.toStepValue(this.FirstOperand) : "$");
		parameters.push(this.SecondOperand != null ? this.toStepValue(this.SecondOperand) : "$");

        return parameters.join();
    }
}