
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcBooleanOperator} from "./IfcBooleanOperator.g"
import {IfcCsgPrimitive3D} from "./IfcCsgPrimitive3D.g"
import {IfcHalfSpaceSolid} from "./IfcHalfSpaceSolid.g"
import {IfcSolidModel} from "./IfcSolidModel.g"
import {IfcTessellatedFaceSet} from "./IfcTessellatedFaceSet.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbooleanresult.htm
 */
export class IfcBooleanResult extends IfcGeometricRepresentationItem {
	Operator : IfcBooleanOperator
	FirstOperand : IfcBooleanResult|IfcCsgPrimitive3D|IfcHalfSpaceSolid|IfcSolidModel|IfcTessellatedFaceSet
	SecondOperand : IfcBooleanResult|IfcCsgPrimitive3D|IfcHalfSpaceSolid|IfcSolidModel|IfcTessellatedFaceSet

    get Dim() : IfcDimensionCount{throw "Derived property logic has not been implemented for Dim."} // derived
    set Dim(value : IfcDimensionCount){super.Dim = value}

    constructor(op : IfcBooleanOperator, firstOperand : IfcBooleanResult|IfcCsgPrimitive3D|IfcHalfSpaceSolid|IfcSolidModel|IfcTessellatedFaceSet, secondOperand : IfcBooleanResult|IfcCsgPrimitive3D|IfcHalfSpaceSolid|IfcSolidModel|IfcTessellatedFaceSet) {
        super()

		this.Operator = op
		this.FirstOperand = firstOperand
		this.SecondOperand = secondOperand

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Operator != null ? BaseIfc.toStepValue(this.Operator) : "$");
		parameters.push(this.FirstOperand != null ? BaseIfc.toStepValue(this.FirstOperand) : "$");
		parameters.push(this.SecondOperand != null ? BaseIfc.toStepValue(this.SecondOperand) : "$");

        return parameters.join();
    }
}