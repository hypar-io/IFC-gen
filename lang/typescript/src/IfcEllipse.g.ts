
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcConic} from "./IfcConic.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcellipse.htm
 */
export class IfcEllipse extends IfcConic {
	SemiAxis1 : IfcPositiveLengthMeasure
	SemiAxis2 : IfcPositiveLengthMeasure

    constructor(position : IfcAxis2Placement2D|IfcAxis2Placement3D, semiAxis1 : IfcPositiveLengthMeasure, semiAxis2 : IfcPositiveLengthMeasure) {
        super(position)

		this.SemiAxis1 = semiAxis1
		this.SemiAxis2 = semiAxis2

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.SemiAxis1))
		parameters.push(BaseIfc.toStepValue(this.SemiAxis2))

            return parameters.join();
        }
}