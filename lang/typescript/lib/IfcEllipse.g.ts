
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcAxis2Placement} from "./IfcAxis2Placement"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcConic} from "./IfcConic"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcellipse.htm
export class IfcEllipse extends IfcConic {
	SemiAxis1 : IfcPositiveLengthMeasure
	SemiAxis2 : IfcPositiveLengthMeasure

    constructor(position : IfcAxis2Placement, semiAxis1 : IfcPositiveLengthMeasure, semiAxis2 : IfcPositiveLengthMeasure) {
        super(position)

		this.SemiAxis1 = semiAxis1
		this.SemiAxis2 = semiAxis2

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.SemiAxis1 != null ? this.toStepValue(this.SemiAxis1) : "$");
		parameters.push(this.SemiAxis2 != null ? this.toStepValue(this.SemiAxis2) : "$");

        return parameters.join();
    }
}